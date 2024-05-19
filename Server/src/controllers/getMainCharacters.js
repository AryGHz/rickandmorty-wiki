const axios = require("axios")



const getMainCharacters = async  (req,res)=>{
  
    try {

        const {API_URL}=process.env;
        const {data} = await axios.get(`${API_URL}/character/`);

        const mainCharacters = data.results.slice(0,5)

        // console.log(mainCharacters)
        return res.status(200).json(mainCharacters)

    }catch (error) {
        error.message.includes("Name")
        ?res.status(501).send(error.message)
        :res.status(404).send(error.message)
    }
    
    
    
};

module.exports= getMainCharacters;