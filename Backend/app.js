const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const Razorpay = require('razorpay');

dotenv.config();
const PORT = process.env.PORT
const app = express();
app.use(cors({origin: "http://localhost:5173",credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Models 
const userModel = require('./models/userModels');

// Controllers 
const {registerUser} = require('./controllers/authController');
const {loginUser} = require('./controllers/authController');
const {logoutUser} = require('./controllers/authController');
const {checkAuth} = require('./controllers/authController');

// Routes 
app.post('/signup',registerUser);
app.post('/login',loginUser);
app.post('/logout',logoutUser);
app.get("/check", checkAuth);

// Razorpay Integration
const paymentRoutes = require("./routes/payment.routes");
app.use("/api/payment", paymentRoutes);

// Server 
app.listen(PORT, () => {
    console.log(`Server is Running on Port http://localhost:${PORT}`)
});