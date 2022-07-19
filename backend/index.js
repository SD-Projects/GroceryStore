const PORT = 2500
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const multer = require("multer")
const { GridFsStorage } = require("multer-gridfs-storage")
const Grid = require("gridfs-stream")

require("dotenv").config()
app.use(express.json())


//Mongo URI and connection
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection


//setting up routes
const userRouter = require("./routes/users")
const productRouter = require("./routes/products")
// const { db } = require("./models/product.model")
// const middleWareAuth = require("./middleware/Authentication.js")
app.use("/users", userRouter)
app.use("/products", productRouter)
// app.use("/middleware" , middleWareAuth)

//initialize
let gfs

//checkers
connection.once("open", () => {
    console.log("Connection to MongoDB established")

    //create stream
    gfs = Grid(mongoose.createConnection(uri), mongoose.mongo)
    gfs.collection("productUpload.chunks")
})

app.get('/photos', (req, res) => {
    gfs.files.find().toArray((err, files) => {
      // check if files exist
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: 'No files exist'
        });
      }

        // if files exist
        return res.json(files);
    });
});

app.listen(PORT, () => {
    console.log(`server is live on port: ${PORT}`)
})