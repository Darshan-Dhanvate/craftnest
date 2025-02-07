const express= require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app= express();
app.use(express.json());

// connecting db

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB connected..");
    })

    .catch((err)=>{
        console.log(err);
    })

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
});