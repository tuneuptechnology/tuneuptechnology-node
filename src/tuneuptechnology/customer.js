const Client = require('./client')

module.exports = class Customer {
    static create(data) {
        const endpoint = Client.base_url() + 'customers/create'
        const response = Client.response(data, endpoint)
        return response
    }

    static all(data) {
        const endpoint = Client.base_url() + 'customers'
        const response = Client.response(data, endpoint)
        return response
    }

    static retrieve(data) {
        const endpoint = Client.base_url() + `customers/${data['id']}`
        const response = Client.response(data, endpoint)
        return response
    }

    static update(data) {
        const endpoint = Client.base_url() + `customers/${data['id']}/update`
        const response = Client.response(data, endpoint)
        return response
    }

    static delete(data) {
        const endpoint = Client.base_url() + `customers/${data['id']}/delete`
        const response = Client.response(data, endpoint)
        return response
    }
}
