const mongoose = require('mongoose')

const HomeSchema = mongoose.Schema({
    name : String,
    price : Number,
    img : String,
    room : Number,
    sdb : Number,
    description : String,
    offre : Array,
    type : String
})

module.exports = mongoose.model('Homes', HomeSchema)