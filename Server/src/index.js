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


module.exports = server; 