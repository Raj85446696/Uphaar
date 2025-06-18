const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT
app.get('/',(req,res)=>{
    res.send("Server is Running");
})

app.listen(PORT,()=>{
    console.log(`Server is Running on Port http://localhost:${PORT}`)
});