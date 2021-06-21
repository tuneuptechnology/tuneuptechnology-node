/* eslint-env node, mocha */
const assert = require('chai').assert
const tuneuptechnology = require('../index')

describe('Client', function () {
    it('throws an error when missing credentials', async function () {
        assert.throws(() => { new tuneuptechnology.Client(null, null, 'http://tuneapp.localhost/api') }, Error)
    })
})
