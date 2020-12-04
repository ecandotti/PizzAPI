const mongoose = require('mongoose')

const Schema = mongoose.Schema

let Client = new Schema({
    cli_name: {
        type: String,
        required: 'Entrer un nom'
    },
    cli_address: {
        type: String,
        required: 'Entrer une adresse'
    },
    cli_info: {
        type: String,
        required: 'Entrer une info'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Client', Client)