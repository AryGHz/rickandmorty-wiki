const express = require('express');
const morgan = require('morgan');
const routes = require("./routes/index");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {FRONT_URL}= process.env

// console.log(FRONT_URL)

const server = express();

const corsOptions = {
    origin: `${FRONT_URL}`,
    // origin: "http://localhost:3000",
    credentials: true,
    
}

server.use(cors(
    corsOptions
));

server.use(express.json());
server.use(express.urlencoded(({extended:false})));
server.use(morgan("dev"));
server.use(cookieParser());
// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//  });
 

server.use(express.static('public'))
server.use('/rickandmorty', routes );

module.exports =  server;