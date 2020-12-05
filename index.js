const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const ResidenceRoutes = express.Router()
const ClientRoutes = express.Router()

const PORT = 8181
let Residence = require('./residence.model')
let Client = require('./client.model')

app.use(bodyParser.json())
mongoose.connect('mongodb+srv://pizzAdmin:BAISETAMER69@cluster0.eifrg.mongodb.net/PizzAPPdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection;connection.once('open', function() {
    console.log("Connexion à la base de donnée MongoDB réussie")
})

/*          ROUTE RESIDENCE         */
ResidenceRoutes.route('/list')
    .get(function(req, res) {
        Residence.find(function(err, list_res) {
            if (err) {
                console.log(err)
            } else {
                res.json(list_res)
            }
        })
    })

ResidenceRoutes.route('/add')
    .post(function(req, res) {
        let residence = new Residence(req.body)
        console.log(residence)
        residence.save()
            .then(residence => {
                res.status(200).json({'residence': 'added successfully'})
                console.log('saved')
            })
            .catch(err => {
                res.status(400).json({'residence': err})
                console.log('no saved')
            })
    })

/*          ROUTE CLIENT         */
ClientRoutes.route('/list')
    .get(function(req, res) {
        Client.find(function(err, list_cli) {
            if (err) {
                console.log(err)
            } else {
                res.json(list_cli)
            }
        })
    })

ClientRoutes.route('/add')
    .post(function(req, res) {
        let client = new Client(req.body)
        console.log(client)
        client.save()
            .then(client => {
                res.status(200).json({'client': 'added successfully'})
                console.log('saved')
            })
            .catch(err => {
                res.status(400).json({'client': err})
                console.log('no saved')
            })
    })

app.use('/residences', ResidenceRoutes)
app.use('/clients', ClientRoutes)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT)
})
