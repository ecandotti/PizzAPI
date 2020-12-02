const mongoose = require('mongoose')

const Schema = mongoose.Schema

let Client = new Schema({
    cli_name: {
        type: String,
        required: [true, 'Rentrer un nom']
    },
    cli_address: {
        type: String,
        required: [true, 'Rentrer une adresse']
    },
    res_info: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Client', Client)