const {User} = require("../DB_connection");
const validateAndHash = require('../config/validateAndHash');


const updateUser = async (req,res) =>{
    try {
        const {profilePicture, username, password} = req.body
        console.log(req.body)

    

        const userFound = await User.findOne({
            where: {id: req.user.id}
        })

        // console.log(userFound)
        if(profilePicture){
           
            const updatedProfilePicture= await userFound.update({profilePicture: profilePicture});
        //    console.log('update user ---',updatedUsername)

            return res.status(200).json({profilePicture:userFound.profilePicture})

        };

        if(username){
           
            const updatedUsername= await userFound.update({username: username});
        //    console.log('update user ---',updatedUsername)

            return res.status(200).json({username:userFound.username})

        }

        if(password){
            const hashedPassword = await validateAndHash(password);
            const updatedPassword=await userFound.update({password:hashedPassword})
            return res.status(200).json({password:'password updated'})
        }

        return res.status(400).json({error:'No data provided', status:400});
        
        
    } catch (error) {
        // console.log(error)
        return res.status(500).json({error:error.message, status:500});
    }
    


}

module.exports = updateUser;