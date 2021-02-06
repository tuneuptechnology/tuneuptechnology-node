const got = require('got')

module.exports = class Client {
    static base_url() {
        return 'https://app.tuneuptechnology.com/api/'
    }
    static version() {
        return '1.1.0'
    }

    static async response(data, endpoint) {
        const request = await got.post(endpoint, {
            headers: {
                'user-agent': `TuneupTechnologyApp/NodeClient/${Client.version()}`
            },
            json: data,
            responseType: 'json'
        }).catch(console.log);
        return request.body
    }
}
