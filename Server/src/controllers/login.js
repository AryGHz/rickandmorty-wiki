const {User} = require('../DB_connection')
const bcrypt = require("bcryptjs")
const createToken = require("../middlewares/createToken")

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
        // console.log(password, userFound.password)
   
        // console.log(validatePassword)

        if(!validatePassword){
            return res.status(403).json({error:"Invalid Password", status:403})
        }

        const token  = await createToken({id:userFound.id});

        res.cookie("token", token, { sameSite: 'none', secure: true })
        // console.log(token)

        return res.status(200).json(userFound)
    

    } catch (error) {
        return res.status(500).json({error:error.message, status:500})
    }

   

    // users.forEach((user)=>{
    //     if(user.email=== email && user.password===password){
    //         // return res.status(200).send(res.json({access:"true"}));}
    //         console.log(user)
    //         return res.status(200).json({access:"true"})
    //      }

    //     return res.status(404).send(res.json({access:"false"}))
    // })

    
};

module.exports = login;