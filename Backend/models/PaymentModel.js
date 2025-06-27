const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'orderSchema' },
    paymentStatus: String,
    paymentMethod: String,
    transactionId: String,
    amount: Number,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('paymentSchema', paymentSchema);