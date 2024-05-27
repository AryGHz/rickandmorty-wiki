const {Favorite, User} = require("../DB_connection");

const deleteFav = async (req,res) =>{
    try {
        const {type, api_id}= req.params

        await Favorite.destroy({
            where:{api_id:api_id, type: type, UserId:req.user.id},
      
        })

        // console.log('destroyed',destroyed)

        const newFavorites= await Favorite.findAll(
            {
                where: {UserId:req.user.id}
            
            }
        )
        return res.status(200).json(newFavorites)

    } catch (error) {
        return res.status(500).json({error:error.message, status:500})
    }
};

module.exports = deleteFav;