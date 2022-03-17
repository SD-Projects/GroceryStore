const mongoose = require("mongoose")
const {schema} = mongoose

const userSchema = new mongoose.Schema({

    firstname:{
        type: String,
        required: true,
        trim: true
    },

    lastname:{
        type: String,
        required: true,
        trim: true
    },

    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,

    },

    password:{
        type: String,
        required: true,
        minlength: 5
    },
})

const User = mongoose.model("User", userSchema)
module.exports = User