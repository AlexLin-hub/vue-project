const axios = require('axios')

module.exports =
    axios.create({
        baseURL: "https://api-takming.herokuapp.com/api/v1",
        headers: { SID: "D10516239", CID: "UXpJd01qRXhNakU0TURFPQ==" }
    })