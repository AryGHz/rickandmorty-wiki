const axios = require("axios")

const getResources = async  (req,res)=>{
    
    try {

        const {resources}  = req.params;
        const name = req.query
        const arr = Object.values(name)[0]
        const API_URL = process.env.API_URL;

        
        if (!arr) {
            return res.status(400).json({error:'Missing data, no name provided', status:400})
        }
    
        const url = `${API_URL}/${resources}`;
        console.log(url)

        if (resources === "episode"){
            const id = Object.values(name)[0]
            console.log(`${url}${id}`)
            const {data} = await axios.get(`${url}/${id}`);
            return res.status(200).json([data])
        }


        const {data} = await axios.get(url,{params:name});

        console.log(resources)
        return res.status(200).json(data.results)

    }catch (error) {
        return res.status(500).json({error:error.message, status:500})
    }
    
};

module.exports = getResources;
