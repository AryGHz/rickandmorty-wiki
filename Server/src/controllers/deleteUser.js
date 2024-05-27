const {User, Favorite} = require("../DB_connection")
const bcrypt = require("bcryptjs");

const deleterUser = async (req,res) =>{
    try {
        const {password} = req.body
        // console.log(req.user);
        // console.log(req.body)

        if(!password){
            return res.status(400).json({error:'Missing password', status:400})
        }

        const userFound = await User.findOne({
            where: {id: req.user.id}
        })

        
        const validatePassword = await bcrypt.compare(password, userFound.password )
        console.log(password, userFound.password)
        console.log(validatePassword)

        if(!validatePassword){
            return res.status(403).json({error:'Incorrect Password', status:403})
        }else{

            const deleteAllFav = await Favorite.destroy({where:{UserId: userFound.id}});
            // console.log(deleteAllFav)
            
            const deletedUser = await User.destroy({where:{email: userFound.email}});
            // console.log(deletedUser)

            return res.status(200).json({userStatus:'deleted'})
        }

        
    } catch (error) {
        return res.status(500).json({error:error.message, status:500})
    }
    


}

module.exports = deleterUser;