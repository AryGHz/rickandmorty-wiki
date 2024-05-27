const {User} = require('../DB_connection')
const bcrypt = require("bcryptjs")
const createToken = require("../config/createToken")

const login=  async (req,res)=>{

    try {
        const {email, password} = req.body;

        const data={email,password}
        // console.log(req.body)

    
        if(Object.values(data).includes(undefined)){
            return res.status(400).json({error:'Missing Data', status:400})
        }

        const userFound = await User.findOne({
            where: {email: email}
        })

    
        if(!userFound){
            return res.status(403).json({error:"Invalid Email", status:403})
        }


        const validatePassword= await bcrypt.compare(password, userFound.password)

        if(!validatePassword){
            return res.status(403).json({error:"Invalid Password", status:403})
        }

        const token  = await createToken({id:userFound.id});

        // res.cookie("token", token, { sameSite: 'none', secure: true })
        // // console.log(token)

        return res.status(200).json({
            id: userFound.id,
            username:userFound.username,
            email:userFound.email, 
            profilePicture:userFound.profilePicture, 
            createdAt: userFound.createdAt,
            token: token
        })
    

    } catch (error) {
        return res.status(500).json({error:error.message, status:500})
    }
    
};

module.exports = login;