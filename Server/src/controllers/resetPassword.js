const {User} = require("../DB_connection");
const jwt = require("jsonwebtoken");
const validateAndHash = require('../config/validateAndHash')


const resetPassword = async (req,res) =>{
    try {
        const {AUTH_TOKEN}= process.env
        const{token,password} = req.body;
        // console.log(password)

        if(!token){
            return res.status(401).json({error:'No token provided', status:401})
        }

        const validateToken = jwt.verify(token, AUTH_TOKEN)

 

        if(validateToken.id){
            const userFound = await User.findOne({
                where: {id: validateToken.id}
            })

            const hashedPass = await validateAndHash(password)
            // console.log('hashedpass',hashedPass);
    
     
            await userFound.update({password: hashedPass})
            
            return res.status(200).json(userFound)

        }else{

            return res.status(403).json({error:validateToken.data, status:403});
        }
        

    } catch (error) {
        return res.status(500).json({error:error.message, status:500});
    }
};

module.exports = resetPassword;