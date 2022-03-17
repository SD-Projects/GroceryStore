const PORT = 2500
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const multer = require("multer")
const {GridFsStorage} = require("multer-gridfs-storage")
const crypto = require('crypto');
const path = require('path');
const Grid = require("gridfs-stream")

require("dotenv").config()
app.use(express.json())


//Mongo URI and connection
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true})
const connection = mongoose.connection


//setting up routes
const userRouter = require("./routes/users")
const productRouter = require("./routes/products")
app.use("/users", userRouter)
app.use("/products", productRouter)

//initialize
let gfs

//checkers
connection.once("open", () => {
    console.log("Connection to MongoDB established")

    //create stream
    gfs = Grid( mongoose.createConnection(uri), mongoose.mongo)
    gfs.collection("productUploads")
})

app.listen(PORT, () =>{
    console.log(`server is live on port: ${PORT}`)
})