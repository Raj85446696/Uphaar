const jwt = require('jsonwebtoken');
const generateToken=(user)=>{
    return jwt.sign({uername:user.username,id:user._id},process.env.JWT_KEY);
}

module.exports.generateToken = generateToken ; 