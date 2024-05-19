const {User} = require("../DB_connection")
// const bcrypt = require("bcryptjs");
const validateAndHash = require('../config/validateAndHash')
const createToken = require("../middlewares/createToken")

const postUser = async (req,res) =>{

    try {
        const {username,email, password} = req.body
        // console.log(req.body)

        if(!username || !email || !password){
            return res.status(400).json({error:'Missing Data', status:400})
        }

        const userFound = await User.findAll({
            where: {email}
        })
     
        // console.log(userFound)

        if(userFound.length > 0){
            return res.status(400).json({error:'This email is already registered', status:400})
            
        }
        
        const hashedPass = await validateAndHash(password)
        // console.log('hashedpass',hashedPass);

        

        const infoUser = {username,email, password: hashedPass};
        // console.log('infouser',infoUser)

        const newUser= await User.create(infoUser)

        const token  = await createToken({id:newUser.id});

        res.cookie("token", token)

        // console.log(newUser.id)

        return res.status(200).json(newUser)


    } catch (error) {
        return res.status(500).json({error:error.message, status:500});
    }
    


}

// INSERT INTO "Users" (email, password) values ('email@mail.com', 'password');
// SELECT * FROM "Users";

module.exports = postUser;