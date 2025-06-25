const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');


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

// Server 
app.listen(PORT, () => {
    console.log(`Server is Running on Port http://localhost:${PORT}`)
});