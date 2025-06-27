const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "user"
    },
    products: [
        {
            productsId: { type: mongoose.Schema.Types.ObjectId, ref: "productSchema" },
            quantity: { type: Number }
        }
    ],

    totalAmount: Number,
    shippingAddress: String,
    status: { type: String, default: 'Pending' },
    orderDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('orderSchema', orderSchema);