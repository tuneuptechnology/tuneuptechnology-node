module.exports = class Location {
    create(data) {
        const endpoint = this.baseUrl() + '/locations'
        const response = this.makeHttpRequest('post', endpoint, data)
        return response
    }

    all() {
        const endpoint = this.baseUrl() + '/locations'
        const response = this.makeHttpRequest('get', endpoint)
        return response
    }

    retrieve(id) {
        const endpoint = this.baseUrl() + `/locations/${id}`
        const response = this.makeHttpRequest('get', endpoint)
        return response
    }

    update(id, data) {
        const endpoint = this.baseUrl() + `/locations/${id}`
        const response = this.makeHttpRequest('patch', endpoint, data)
        return response
    }

    delete(id) {
        const endpoint = this.baseUrl() + `/locations/${id}`
        const response = this.makeHttpRequest('delete', endpoint)
        return response
    }
}
