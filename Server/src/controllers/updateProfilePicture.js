const {User} = require("../DB_connection");


const updateProfilePicture = async (req,res) =>{
    try {

        const {image}  = req.body
        
        
        const userFound = await User.findOne({
        where: {id: req.user.id}
        })

        await userFound.update({profilePicture: image});

        return res.status(200).json({profilePicture:userFound.profilePicture})
        
    } catch (error) {
        return res.status(500).json({error:error.message, status:500})
    }
    


}

module.exports = updateProfilePicture;