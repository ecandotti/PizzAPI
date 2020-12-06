const mongoose = require('mongoose')

const Schema = mongoose.Schema

let Contact = new Schema({
    isClient: {
        type: Boolean,
        required: "De quel contact s'agit'il ?"
    },
    name: {
        type: String,
        required: 'Entrer un nom'
    },
    address: {
        type: String,
        required: 'Entrer une adresse'
    },
    code: {
        type: String
    },
    info: {
        type: String,
        required: 'Entrer une information'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Contact', Contact)