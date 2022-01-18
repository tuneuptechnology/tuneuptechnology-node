module.exports = class Ticket {
  constructor (baseUrl, makeHttpRequest) {
    this.baseUrl = baseUrl
    this.makeHttpRequest = makeHttpRequest
  }

  async create (data) {
    const endpoint = this.baseUrl + '/tickets'
    const response = await this.makeHttpRequest('post', endpoint, data)
    return response
  }

  async all () {
    const endpoint = this.baseUrl + '/tickets'
    const response = await this.makeHttpRequest('get', endpoint)
    return response
  }

  async retrieve (id) {
    const endpoint = this.baseUrl + `/tickets/${id}`
    const response = await this.makeHttpRequest('get', endpoint)
    return response
  }

  async update (id, data) {
    const endpoint = this.baseUrl + `/tickets/${id}`
    const response = await this.makeHttpRequest('patch', endpoint, data)
    return response
  }

  async delete (id) {
    const endpoint = this.baseUrl + `/tickets/${id}`
    const response = await this.makeHttpRequest('delete', endpoint)
    return response
  }
}
