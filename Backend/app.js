const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const Razorpay = require('razorpay');

dotenv.config();
const PORT = process.env.PORT
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Models 
const userModel = require('./models/userModels');

// Controllers 
const {registerUser} = require('./controllers/authController');
const {loginUser} = require('./controllers/authController');
const {logoutUser} = require('./controllers/authController');

// Routes 
app.post('/signup',registerUser);
app.post('/login',loginUser);
app.post('/logout',logoutUser);



const razorpay = new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,      // from Razorpay Dashboard
  key_secret:process.env.RAZORPAY_KEY_SECRET,
});

app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: 50000, // amount in paise (₹500.00)
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating order");
  }
});

// Server 
app.listen(PORT, () => {
    console.log(`Server is Running on Port http://localhost:${PORT}`)
});