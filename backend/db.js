const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://root:root@cluster0.fwbsnj4.mongodb.net/urlshortner?retryWrites=true&w=majority"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;