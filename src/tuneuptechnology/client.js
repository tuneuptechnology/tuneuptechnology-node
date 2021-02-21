const got = require('got')

module.exports = class Client {
    static base_url() {
        return 'https://app.tuneuptechnology.com/api/'
    }
    static version() {
        return '1.2.0'
    }

    static async make_http_request(data, endpoint) {
        const request = await got.post(endpoint, {
            headers: {
                'user-agent': `TuneupTechnologyApp/NodeClient/${Client.version()}`
            },
            json: data,
            responseType: 'json',
            timeout: 10000
        }).catch(console.log);
        return request.body
    }
}
