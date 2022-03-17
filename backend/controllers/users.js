const router = require("express").Router()
let User = require("../models/user.model")
const express = require('express')
const app = express()


router.route("/").get((req, res) => {
    res.send("hey")
})

router.route("/register").post((req, res) => {

    console.log("ASD")

    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password

    const newUser = new User({firstname, lastname, email, password})

    newUser.save()
        .then(() => res.json("User added"))
        .catch(err => res.status(400).json("Error: " + err))
  
})

module.exports = router