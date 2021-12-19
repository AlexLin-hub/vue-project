const api = require('./Api')

module.exports = {
    getUsers() {
        return api.get('/user')
    },
    createUsers(body) {
        return api.post('/user', body)
    },
    updateUsers(body) {
        return api.put('/user', body)
    },
    deleteUsers(req) {
        const { UID } = req
        return api.delete(`/user`, { params: { UID } })
        // /user?UID=xxxxxx
    }
}