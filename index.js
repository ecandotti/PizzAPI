const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const Contact = express.Router()

const PORT = process.env.PORT || 3000
let Contact = require('./contact.model')

app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb+srv://pizzAdmin:BAISETAMER69@cluster0.eifrg.mongodb.net/PizzAPPdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', function() {
    console.log("Connexion à la base de donnée MongoDB réussie")
})

/*          ROUTE CONTACT         */
ContactRoutes.route('/list')
    .get(function(req, res) {
        Contact.find(function(err, list_res) {
            if (err) {
                console.log(err)
            } else {
                res.json(list_res)
            }
        })
    })

ContactRoutes.route('/add')
    .post(function(req, res) {
        let contact = new Contact(req.body)
        console.log(contact)
        contact.save()
            .then(contact => {
                res.status(200).json({'contact': 'added successfully'})
                console.log('saved')
            })
            .catch(err => {
                res.status(400).json({'contact': err})
                console.log('no saved')
            })
    })

app.use('/contacts', ContactRoutes)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT)
})
