const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express()


//Middlewares
app.use(cors())
app.use(bodyParser.json())
const homeRoute = require('./routes/homes')

app.use('/homes', homeRoute)


//connect to DB
mongoose.connect('mongodb+srv://moussa:moussa@cluster0.bt4t5.mongodb.net/test' , () => {
    console.log('connected to db')
})

//listen to the server
app.listen(8000)