const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId : {
       type :  mongoose.Schema.Types.ObjectId , ref : "user"
    },
    products:[
        {
            productsId : {type:mongoose.Schema.Types.ObjectId,ref:"productSchema"},
            quantity: { type: Number, default: 1 }
        }
    ]
})

module.exports = mongoose.model('cartSchema',cartSchema);