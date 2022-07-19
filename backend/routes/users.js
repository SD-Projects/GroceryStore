const router = require("express").Router()
let User = require("../models/user.model")
const express = require('express')
const app = express
const jwt = require("jsonwebtoken")

router.route("/").get((req, res) => {
    res.send("ASD")
})

//login
router.route("/login").post(async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const firstname = req.body.firstname
    const shoppingCart = req.body.shoppingCart

    try {
        const existingUser = await User.findOne({ email })

        if (!existingUser || existingUser == null)
            return res.status(404).json({ message: "User does not exist" })

        if (password === existingUser.password) {
            const token = jwt.sign({ email: existingUser.email, id: existingUser._id, firstname: existingUser.firstname }
                , "test", { expiresIn: "1h" })

            res.header("auth-token", token)

            res.status(200).json({
                token: token, shoppingCart: existingUser.shoppingCart,
                user: {
                    name: existingUser.firstname, email: existingUser.email
                }
            })
        }

    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }

})

//register
router.route("/register").post(async (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password

    const checkExisting = await User.findOne({ email })

    if (checkExisting)
        return res.status(400).json({ message: "Email already in use!" })

    const newUser = new User({ firstname, lastname, email, password })

    newUser.save()
        .then(() => res.json("User added"))
        .catch(err => res.status(400).json("Error: " + err))

})

router.route("/addItemToCart").post(async (req, res) => {
    const itemId = req.body.id
    const price = req.body.price
    const productName = req.body.productName
    const imagePath = req.body.imagePath
    const user_id = req.headers.user_id
    let quantity = 1

    try {
        const existingUser = await User.findByIdAndUpdate({
            _id: user_id
        },
            {
                $push: {
                    shoppingCart:
                    {

                        itemId,
                        price,
                        quantity,
                        imagePath,
                        productName

                    }
                }
            },
            { new: true }
        )
            .then(doc => res.status(200).json({ shoppingCart: doc.shoppingCart }))


    } catch (e) {
        console.log("broken")
    }

})

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"]

    const token = authHeader && authHeader.split(" ")[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })

}

router.route("/incrementCartItem").post(async (req, res) => {
    const user = req.body.user
    let quantity = 1

    try {
        const existingUser = await User.find({
            _id: user
        },

        ).then(res => console.log((res)))

    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }

})


module.exports = router