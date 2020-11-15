const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const ResidenceRoutes = express.Router()

const PORT = 3001
let Residence = require('./residence.model')

app.use(bodyParser.json())
mongoose.connect('mongodb://localhost/PizzApp', { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection;connection.once('open', function() {
    console.log("MongoDB database connection established successfully")
})

ResidenceRoutes.route('/')
    .get(function(req, res) {
        Residence.find(function(err, todos) {
            if (err) {
                console.log(err)
            } else {
                res.json(todos)
            }
        })
    })

ResidenceRoutes.route('/addResidence')
    .post(function(req, res) {
        let residence = new Residence(req.body)
        console.log(residence)
        residence.save()
            .then(residence => {
                res.status(200).json({'residence': 'residence added successfully'})
            })
            .catch(err => {
                res.status(400).send('adding new residence failed')
            })
    })

app.use('/residences', ResidenceRoutes)
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT)
})