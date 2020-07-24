const got = require('got')

module.exports = class Client {
    static base_url() {
        return 'https://app.tuneuptechnology.com/api/'
    }
    static version() {
        return '1.0.0'
    }

    static async response(data, endpoint) {
        const request = await got.post(endpoint, {
            json: data,
            responseType: 'json'
        }).catch(console.log);
        return request.body
    }
}
