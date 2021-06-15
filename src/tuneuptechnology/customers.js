module.exports = class Customers {
    constructor(baseUrl, makeHttpRequest) {
        this.baseUrl = baseUrl
        this.makeHttpRequest = makeHttpRequest
    }

    create(data) {
        const endpoint = this.baseUrl + '/customers'
        const response = this.makeHttpRequest('post', endpoint, data)
        return response
    }

    all() {
        const endpoint = this.baseUrl() + '/customers'
        const response = this.makeHttpRequest('get', endpoint)
        return response
    }

    retrieve(id) {
        const endpoint = this.baseUrl() + `/customers/${id}`
        const response = this.makeHttpRequest('get', endpoint)
        return response
    }

    update(id, data) {
        const endpoint = this.baseUrl() + `/customers/${id}`
        const response = this.makeHttpRequest('patch', endpoint, data)
        return response
    }

    delete(id) {
        const endpoint = this.baseUrl() + `/customers/${id}`
        const response = this.makeHttpRequest('delete', endpoint)
        return response
    }
}
