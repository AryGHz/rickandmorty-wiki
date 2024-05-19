
const {Favorite} = require("../DB_connection");
const {User} = require("../DB_connection");

const postFav = async (req,res) =>{
    try {

        const{api_id, name, image, type} = req.body

        const body = {api_id, name, image, type, UserId:req.user.id}

        // console.log(body)

        if(Object.values(body).includes(undefined)){
            return res.status(400).json({error:'Missing Data', status:400})
        }

        const newFav =await Favorite.findOrCreate({
            where: body,
            
        })

  
        const newFavoriteArray = await Favorite.findAll(
            {
                where: {UserId:req.user.id}
               
            }
        );
        // console.log("newFavorite---",newFavoriteArray);
        
        return res.status(200).json(newFavoriteArray);

    } catch (error) {
        return res.status(500).json({error:error.message, status:500});
    }
};

module.exports = postFav;