const got = require('got')
const Customers = require('./Customers')

module.exports = class Client {
    constructor(email, apiKey, baseUrl = 'https://app.tuneuptechnology.com/api', timeout = 10000) {
        this.email = email
        this.apiKey = apiKey
        this.baseUrl = baseUrl
        this.timeout = timeout
        this.version = '2.0.0'
        this.customers = new Customers(baseUrl, this.makeHttpRequest.bind(this))

        if (!email || !apiKey) {
            throw new Error('email and apiKey are required to create a client.')
        }
    }

    async makeHttpRequest(method, endpoint, data = null) {
        const request = await got(endpoint, {
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
        }).catch(console.log);
        return JSON.stringify(request.body, null, 4)
    }
}
