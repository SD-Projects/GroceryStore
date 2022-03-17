const router = require("express").Router()
let Product = require("../models/product.model")
const multer = require("multer")
const {GridFsStorage} = require("multer-gridfs-storage")
const crypto = require('crypto');
const path = require('path');
const uri = process.env.ATLAS_URI

let gfs

//create storage
const storage = new GridFsStorage({
    url: uri,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          console.log(filename)
          const fileInfo = {
            filename: filename,
            bucketName: 'productUploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const uploadStorage = multer({ storage });

router.route("/sales").get((req, res) => {

  //.aggregate([{$sample : {size: #}}]) --> gets random articles from MongoDB
    Product.aggregate([{$sample : {size: 5}}])
        .then(prods => res.json(prods))
        .catch(err => res.status(400).json("Error: " + err))
})

//upload new product
router.route("/upload").post( uploadStorage.single("imageFile"),  (req, res) => {

    const product = new Product({
        productName: req.body.productName, 
        productType: req.body.productType,
        price: req.body.price,
        discountedPrice: req.body.discountedPrice,
        date: req.body.date,
        imageFile: req.body.imageFile
    })
    product.save().then(result => {
        console.log(result);
        res.status(201).json({
          message: "Created product successfully",
          createdProduct: {
            productName: result.productName,

            }
        });
      })
    
})


//populate grocery list
router.route("/getgrocerylist").get( (req, res) => {
    
    Product.find()
        .then(prods => res.json(prods))
        .catch(err => res.status(400).json("Error: " + err))

})

module.exports = router