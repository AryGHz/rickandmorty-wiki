const {Favorite, User} = require("../DB_connection");

const getFav = async (req,res) =>{
    try {

        // console.log(req.user)
        
        const myFavorites = await Favorite.findAll(
            {
                    where: {UserId:req.user.id}
              
            }
        )
        
        return res.status(200).json(myFavorites)

    } catch (error) {
        return res.status(500).json({error:error.message, status:500})
    }
};

module.exports = getFav;