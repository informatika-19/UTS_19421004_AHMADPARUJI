const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kipasSchema = new Schema({
   	    merk:{
        type: String
        },
        processor:{
            type: String
        },
	    harga : {
            type: String
        }
})
module.exports =mongoose.model('kipas',kipasSchema)