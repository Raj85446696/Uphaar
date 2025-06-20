const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Uphaar');

const userSchema =new mongoose.Schema({
    fullname : String,
    username : String, 
    password : String ,
    userType : String ,

})

module.exports = mongoose.model("user",userSchema);