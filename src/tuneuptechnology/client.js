const got = require('got')
const Customers = require('./Customers')
const Inventory = require('./Inventory')
const Locations = require('./Locations')
const Tickets = require('./Tickets')

module.exports = class Client {
    constructor(email, apiKey, baseUrl = 'https://app.tuneuptechnology.com/api', timeout = 10000) {
        this.email = email
        this.apiKey = apiKey
        this.baseUrl = baseUrl
        this.timeout = timeout
        this.version = '2.0.0'
        this.customers = new Customers(baseUrl, this.makeHttpRequest.bind(this))
        this.inventory = new Inventory(baseUrl, this.makeHttpRequest.bind(this))
        this.locations = new Locations(baseUrl, this.makeHttpRequest.bind(this))
        this.tickets = new Tickets(baseUrl, this.makeHttpRequest.bind(this))

        if (!email || !apiKey) {
            throw new Error('email and apiKey are required to create a client.')
        }
    }

    async makeHttpRequest(method, endpoint, data = null) {
        // If post or patch, include a json body
        if (['post', 'patch'].includes(method)) {
            try {
                const response = await got(endpoint, {
                    method,
                    headers: {
                        'Accept': 'application/json',
                        'User-Agent': `TuneupTechnologyApp/NodeClient/${this.version}`,
                        'Email': this.email,
                        'Api-Key': this.apiKey
                    },
                    json: data,
                    responseType: 'json',
                    timeout: this.timeout
                })
                return response.body
            } catch (error) {
                return error.response.body
            }
        } else {
            // if get or delete, don't include a json body
            try {
                const response = await got(endpoint, {
                    method,
                    headers: {
                        'Accept': 'application/json',
                        'User-Agent': `TuneupTechnologyApp/NodeClient/${this.version}`,
                        'Email': this.email,
                        'Api-Key': this.apiKey
                    },
                    responseType: 'json',
                    timeout: this.timeout
                })
                return response.body
            } catch (error) {
                return error.response.body
            }
        }
    }
}
