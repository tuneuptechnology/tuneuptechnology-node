const Client = require('./client')

module.exports = class Location {
    static create(data) {
        const endpoint = Client.base_url() + 'locations/create'
        const response = Client.response(data, endpoint)
        return response
    }

    static all(data) {
        const endpoint = Client.base_url() + 'locations'
        const response = Client.response(data, endpoint)
        return response
    }

    static retrieve(data) {
        const endpoint = Client.base_url() + `locations/${data['id']}`
        const response = Client.response(data, endpoint)
        return response
    }

    static update(data) {
        const endpoint = Client.base_url() + `locations/${data['id']}/update`
        const response = Client.response(data, endpoint)
        return response
    }

    static delete(data) {
        const endpoint = Client.base_url() + `locations/${data['id']}/delete`
        const response = Client.response(data, endpoint)
        return response
    }
}
