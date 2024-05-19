const axios = require('axios');


const getDetails = async (req,res)=>{

    try {
        const {API_URL}= process.env;
        const {resources,id} = req.params;
        // console.log(resources)
        const {data} = await axios(`${API_URL}/${resources}/${id}`)

        if(resources === "character"){
            const episodes = data.episode;
            // console.log(episodes.length)
            const episodesInfo = []

            const getEpisodesInfo =  await episodes.map( async element => {
                    const {data} = await axios.get(element)
                    episodesInfo.push({id:data.id, name:data.name})
                });

            
            
            Promise.all(getEpisodesInfo).then(() => { return res.status(200).json([data, episodesInfo]) });            
        }
        

        if(Object.keys(data).includes("residents")){
            const residents = data.residents;
            // console.log(residents.length)
            const residentsInfo = []

            const getResidentsInfo =  await residents.map( async element => {
                    const {data} = await axios.get(element)
                    residentsInfo.push({id:data.id, name:data.name, image:data.image})
                });
            
            Promise.all(getResidentsInfo).then(() => { return res.status(200).json([data, residentsInfo]) });            
        }

        if(Object.keys(data).includes("characters")){
            const characters = data.characters;
            // console.log(characters.length)
            const charsInfo = []

            const getCharsInfo =  await characters.map( async element => {
                    const {data} = await axios.get(element)
                    charsInfo.push({id:data.id, name:data.name, image:data.image})
                });
            
            Promise.all(getCharsInfo).then(() => { return res.status(200).json([data, charsInfo]) });            
        }

        
        

    } catch (error) {
        return res.status(500).json({error:error.message, status:500})
    }
    
    

    

}

module.exports = getDetails;