module.exports = class Ticket {
    create(data) {
        const endpoint = this.baseUrl() + '/tickets'
        const response = this.makeHttpRequest('post', endpoint, data)
        return response
    }

    all() {
        const endpoint = this.baseUrl() + '/tickets'
        const response = this.makeHttpRequest('get', endpoint)
        return response
    }

    retrieve(id) {
        const endpoint = this.baseUrl() + `/tickets/${id}`
        const response = this.makeHttpRequest('get', endpoint)
        return response
    }

    update(id, data) {
        const endpoint = this.baseUrl() + `/tickets/${id}`
        const response = this.makeHttpRequest('patch', endpoint, data)
        return response
    }

    delete(id) {
        const endpoint = this.baseUrl() + `/tickets/${id}`
        const response = this.makeHttpRequest('delete', endpoint)
        return response
    }
}
