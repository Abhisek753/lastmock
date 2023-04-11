const mongoose=require("mongoose")
mongoose.set('strictQuery',true)
require("dotenv").config()


const connection =mongoose.connect("mongodb://127.0.0.1:27017/data")

module.exports={
    connection
}