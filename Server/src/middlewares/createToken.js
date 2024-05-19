const jwt = require("jsonwebtoken");
const {AUTH_TOKEN} = process.env;

const createToken = (payload)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign(payload, AUTH_TOKEN, 
            {
                expiresIn: "1d"
            }, (error, token)=>{
                if(error){
                    reject(error)
                }
                resolve(token)
            }
        )
    })

}

module.exports = createToken;