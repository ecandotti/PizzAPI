const mongoose = require('mongoose')

const Schema = mongoose.Schema

let Residence = new Schema({
    res_name: {
        type: String,
        required: true
    },
    res_address: {
        type: String,
        required: true
    },
    res_code: {
        type: String
    },
    res_info: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Residence', Residence)