const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userModel = require('./models/userModels');
const bcrypt = require('bcrypt');
dotenv.config();
const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Server is Running");
})

app.post('/signup', async (req, res) => {
    const { fullname, username, password, userType } = req.body;
    try {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                const user = new userModel({
                    fullname,
                    username,
                    password: hash,
                    userType
                });
                try {
                    await user.save();
                    res.status(201).json({ message: 'User created successfully', user });
                } catch (saveError) {
                    res.status(500).json({ error: 'Failed to save user', details: saveError.message });
                }
            });
        });
    } catch (error) {
        res.status(500).json({ error: 'Unexpected error', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is Running on Port http://localhost:${PORT}`)
});