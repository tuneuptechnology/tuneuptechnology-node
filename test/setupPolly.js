const FSPersister = require('@pollyjs/persister-fs')
const NodeHttpAdapter = require('@pollyjs/adapter-node-http')
const path = require('path')
const Polly = require('@pollyjs/core').Polly
const setupPolly = require('@pollyjs/core').setupMocha

Polly.register(FSPersister)
Polly.register(NodeHttpAdapter)

function startPolly () {
  setupPolly({
    adapters: ['node-http'],
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, './cassettes')
      }
    },
    recordIfMissing: true,
    matchRequestsBy: {
      headers: false,
      url: false
    }
  })
}

function stripCreds (server) {
  server.any().on('beforePersist', (_, recording) => {
    recording.request.headers = recording.request.headers.filter(({ name }) => name !== 'email').filter(({ name }) => name !== 'api-key')
  })
}

module.exports = {
  startPolly,
  stripCreds
}
