class APIHandler {

    constructor() {
        this.api = axios.create({ baseURL: 'http://localhost:3000/api' })
    }

    getFullListAirports = () => this.api.get('/')

    getOneReview = id => this.api.get(`/${id}`)
}