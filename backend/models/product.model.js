const mongoose = require("mongoose")
const {schema} = mongoose

const productSchema = new mongoose.Schema({
    
    productName:{
        type: String,
        required: true
    },

    productType:{
        type: String,
        required: false
    },

    price:{
        type: Number,
        required: false
    },

    discountedPrice:{
        type: Number,
        required: false
    },

    date:{
        type: Date,
        required: false
    },

    imageFile:{
        data: Buffer,
        contentType: String, 
        required: false
    }
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product