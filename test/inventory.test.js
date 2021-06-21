/* eslint-env node, mocha */
const assert = require('chai').assert
const tuneuptechnology = require('../index')
const setupPolly = require('./setupPolly')

describe('Inventory', function () {
    setupPolly.startPolly()

    it('creates an inventory item', async function () {
        const { server } = this.polly
        setupPolly.stripCreds(server)

        const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY, 'http://tuneapp.localhost/api')

        const data = {
            name: 'Inventory Item',
            inventory_type_id: 1,
            part_number: '1234',
            sku: '1234',
            notes: 'here are some notes',
            part_price: '19.99',
            location_id: 1,
            quantity: 1
        }

        const response = await client.inventory.create(data)

        assert.equal(response['name'], 'Inventory Item')
    })

    it('retrieves an inventory item', async function () {
        const { server } = this.polly
        setupPolly.stripCreds(server)

        const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY, 'http://tuneapp.localhost/api')

        const response = await client.inventory.retrieve(1)

        assert.exists(response['name'])
    })

    it('retrieves all inventory', async function () {
        const { server } = this.polly
        setupPolly.stripCreds(server)

        const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY, 'http://tuneapp.localhost/api')

        const response = await client.inventory.all()

        assert.isAtLeast(response['data'].length, 1)
    })

    it('updates an inventory item', async function () {
        const { server } = this.polly
        setupPolly.stripCreds(server)

        const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY, 'http://tuneapp.localhost/api')

        const data = {
            name: 'Inventory Item',
            inventory_type_id: 1,
            part_number: '1234',
            sku: '1234',
            notes: 'here are some notes',
            part_price: '19.99',
            location_id: 1,
            quantity: 1
        }

        const response = await client.inventory.update(1, data)

        assert.equal(response['name'], 'Inventory Item')
    })

    it('deletes an inventory item', async function () {
        const { server } = this.polly
        setupPolly.stripCreds(server)

        const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY, 'http://tuneapp.localhost/api')

        const response = await client.inventory.delete(1)

        assert.exists(response['deleted_at'])
    })
})
