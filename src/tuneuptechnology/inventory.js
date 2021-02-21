const Client = require('./client')

module.exports = class Inventory {
    static create(data) {
        const endpoint = Client.base_url() + 'inventory/create'
        const response = Client.make_http_request(data, endpoint)
        return response
    }

    static all(data) {
        const endpoint = Client.base_url() + 'inventory'
        const response = Client.make_http_request(data, endpoint)
        return response
    }

    static retrieve(data) {
        const endpoint = Client.base_url() + `inventory/${data['id']}`
        const response = Client.make_http_request(data, endpoint)
        return response
    }

    static update(data) {
        const endpoint = Client.base_url() + `inventory/${data['id']}/update`
        const response = Client.make_http_request(data, endpoint)
        return response
    }

    static delete(data) {
        const endpoint = Client.base_url() + `inventory/${data['id']}/delete`
        const response = Client.make_http_request(data, endpoint)
        return response
    }
}
