const jwt = require("jsonwebtoken")
const {AUTH_TOKEN}= process.env

const validateToken  = (req,res,next)=>{
    const {token} = req.body;

    console.log("token===>",req.body)
    // console.log(req.cookies)

    if(!token){
        return res.status(401).json({error:'No token provided', status:500});
    }
    jwt.verify(token, AUTH_TOKEN,(error, user)=>{
        if(error){
            return res.status(403).json({error:'Invalid Token', status:403});
        };

        req.user = user;
        console.log(req.user)
        next();
    })
}

module.exports = validateToken;