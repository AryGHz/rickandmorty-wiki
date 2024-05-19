const server = require('./app')

const {conn} = require('./DB_connection')

const {PORT} = process.env

server.listen(PORT, async ()=>{
    try {
        console.log("Server raised in port " + PORT);
        await conn.sync({alter: true})
    } catch (error) {
        console.log("error al iniciar", error)
    }
});





// const server = http.createServer((request,response) =>{
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     if (request.url.includes("/rickandmorty/character")) {
//         const id = request.url.split("/").at(-1)
//         getCharByID(response, +id)  
//         // console.log(getCharByID(response, +id))
//     }
//     }).listen(3001, "localhost");

module.exports = server; 