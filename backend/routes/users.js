const router = require("express").Router()
let User = require("../models/user.model")
const express = require('express')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { response } = require("express")


// const signup = require("../controllers/users.js")
// router.post("/register", signup)

router.route("/").get((req, res) => {
    res.send("ASD")
})

router.route("/login").post( async (req, res)  => {
    const email = req.body.email
    const password = req.body.password
    const firstname = req.body.firstname
    
    try{
        const existingUser = await User.findOne({email})

        if (!existingUser || existingUser == null)
            return res.status(404).json({message: "User does not exist"})

        if (password === existingUser.password){
            console.log("truu")
            const token = jwt.sign({email: existingUser.email, id: existingUser._id, firstname: existingUser.firstname}, "test", {expiresIn: "1h"})
            // localStorage.setItem("auth-token", token)
            // res.header("auth-token", token).send(token)
            
            res.send(token)
        }   

    }catch (error){
        res.status(500).json({message: "Something went wrong!"})
    }

})

router.route("/register").post( async (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password

    const checkExisting = await User.findOne({email})
    
    if(checkExisting)
        return res.status(400).json({message: "Email already in use!"})

    const newUser = new User({firstname, lastname, email, password})

    newUser.save()
        .then(() => res.json("User added"))
        .catch(err => res.status(400).json("Error: " + err))
  
})


module.exports = router