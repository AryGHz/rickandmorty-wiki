const {User} = require("../DB_connection");
const deleteFiles = require('../config/deleteFiles')



const updateProfilePicture = async (req,res) =>{
    try {
        const {URL} = process.env

        const file = req.file

        if(!file){
            return res.status(403).json({error:'filetype not supported', status:403})
        }

        // console.log("file",file) 
        
        
        const userFound = await User.findOne({
        where: {id: req.user.id}
        })

        if(userFound.profilePicture){
            const filename = userFound.profilePicture.split("/").pop();
            // console.log('filename',filename)

            // console.log("profilepicture",userFound.profilePicture)
            deleteFiles(filename);
        }

        await userFound.update({profilePicture: `${URL}/images/${file.filename}`});


    //   return res.status(200).json(`${URL}/images/${file.filename}`)

        return res.status(200).json(userFound)
        
    } catch (error) {
        return res.status(500).json({error:error.message, status:500})
    }
    


}

module.exports = updateProfilePicture;