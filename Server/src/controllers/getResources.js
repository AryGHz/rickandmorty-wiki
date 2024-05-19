const axios = require("axios")

const getResources = async  (req,res)=>{
    
    try {

        const {resources}  = req.params;
        const name = req.query
        const arr = Object.values(name)[0]
        const API_URL = process.env.API_URL;

        // console.log(arr,resources, name,API_URL);

        
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
;
// --------------------------------------------------------------
        // no incluye mejora en tiempo:

        // const info= data.results.map(character =>{
        //     return({
        //         name:character.name,
        //         image:character.image
        //     })
// --------------------------------------------------------------------            
                


        console.log(resources)
        return res.status(200).json(data.results)

    }catch (error) {
        return res.status(500).json({error:error.message, status:500})
    }
    
    
    
};

// .catch(error => res.status(500).send(error.message))


// const getCharByID= (res,id) =>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then (({id,name,gender,species,origin,image,status})=>{
//         const character ={
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status,
//         }

//         console.log(character + "char")

//         return res.writeHead(200, {"Content-type" : "application/json"})
//         .end(JSON.stringify(character))
//     })
//     .catch(error=>{
//         return res.writeHead(500, {"Content-type" : "text/plain"})
//         .end(error.message)
//     })
// }

module.exports = getResources;
