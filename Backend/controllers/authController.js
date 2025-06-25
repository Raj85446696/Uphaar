const userModel = require('../models/userModels');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/generateToken'); 

module.exports.registerUser = async (req, res) => {
    const { fullname, username, password, userType } = req.body;
    let user = await userModel.findOne({ username: username });
    if (user) return res.status(401).send("You already have an account, please login.");

    try {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(500).json({ error: 'Salt generation failed' });

            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.status(500).json({ error: 'Hashing failed' });

                const newUser = new userModel({
                    fullname,
                    username,
                    password: hash,
                    userType
                });

                try {
                    await newUser.save();
                    const token = generateToken(newUser);
                    res.cookie('token', token);
                    res.status(201).json({ message: 'User created successfully', user: newUser });
                } catch (saveError) {
                    res.status(500).json({ error: 'Failed to save user', details: saveError.message });
                }
            });
        });
    } catch (error) {
        res.status(500).json({ error: 'Unexpected error', details: error.message });
    }
}


module.exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user);
        res.cookie('token', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production", // only send over HTTPS in prod
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                fullname: user.fullname,
                userType: user.userType
            },
            token
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).send('Server error');
    }
};


module.exports.logoutUser = async (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'Logout successfully!' });
};
