const jwt = require("jsonwebtoken")

const authorize = async (res, req, next) =>{

    try {
        const token = req.headers.authorization.split(" ")[1]
        
        let userData

        if(token == null) return res.sendStatus(404)

        userData = jwt.verify(token, "test")
        req.userId = userData?.id

        next()

    } catch (error) {
        
    }

}

module.exports = authorize