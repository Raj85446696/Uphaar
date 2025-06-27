const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String ,
    image : String , 
    orgprice : Number ,
    disprice : Number , 
    offer : Number , 
    description: String ,
    category : String , 
    brand : String ,
    stock : String 
})

modules.exports = mongoose.model('product',productSchema);