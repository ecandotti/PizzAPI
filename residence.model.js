const mongoose = require('mongoose')

const Schema = mongoose.Schema

let Residence = new Schema({
    res_name: {
        type: String,
        required: 'Entrer un nom'
    },
    res_address: {
        type: String,
        required: 'Entrer une adresse'
    },
    res_code: {
        type: String
    },
    res_info: {
        type: String,
        required: 'Entrer une information'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Residence', Residence)