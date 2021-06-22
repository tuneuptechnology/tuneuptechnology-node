/* eslint-env node, mocha */
const assert = require('chai').assert
const tuneuptechnology = require('../index')
const setupPolly = require('./setupPolly')

describe('Customers', function () {
    setupPolly.startPolly()

    it('creates a customer', async function () {
        const { server } = this.polly
        setupPolly.stripCreds(server)

        const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY, 'http://tuneapp.localhost/api')

        const data = {
            firstname: 'Jake',
            lastname: 'Peralta',
            email: 'jake@example.com',
            phone: '8015551234',
            user_id: 1,
            notes: 'Believes he is a good detective.',
            location_id: 1
        }

        const response = await client.customers.create(data)

        assert.equal(response['firstname'], 'Jake')
    })

    it('retrieves a customer', async function () {
        const { server } = this.polly
        setupPolly.stripCreds(server)

        const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY, 'http://tuneapp.localhost/api')

        const response = await client.customers.retrieve(1)

        assert.exists(response['firstname'])
    })

    it('retrieves all customers', async function () {
        const { server } = this.polly
        setupPolly.stripCreds(server)

        const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY, 'http://tuneapp.localhost/api')

        const response = await client.customers.all()

        assert.isAtLeast(response['data'].length, 1)
    })

    it('updates a customer', async function () {
        const { server } = this.polly
        setupPolly.stripCreds(server)

        const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY, 'http://tuneapp.localhost/api')

        const data = {
            firstname: 'Jake',
            lastname: 'Peralta',
            email: 'jake@example.com',
            phone: '8015551234',
            user_id: 1,
            notes: 'Believes he is a good detective.',
            location_id: 1
        }

        const response = await client.customers.update(1, data)

        assert.equal(response['firstname'], 'Jake')
    })

    it('deletes a customer', async function () {
        const { server } = this.polly
        setupPolly.stripCreds(server)

        const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY, 'http://tuneapp.localhost/api')

        const response = await client.customers.delete(1)

        assert.exists(response['deleted_at'])
    })
})
