const express = require('express');
const morgan = require('morgan');
const routes = require("./routes/index");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {FRONT_URL}= process.env



const server = express();

const corsOptions = {
    origin: `${FRONT_URL}`,
    credentials: true,
    
}

server.use(cors(
    corsOptions
));

server.use(express.json());
server.use(express.urlencoded(({extended:true})));
server.use(morgan("dev"));
server.use(cookieParser());
server.use(express.static('public'))
server.use('/', routes );

module.exports =  server;