require('dotenv').config();
// console.log(process.env)
const pg = require('pg')
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DATABASE_URL } = process.env;
//console.log( DB_USER, DB_PASSWORD, DB_HOST)
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');

// const DB_USER='postgres';
// const DB_PASSWORD= '1234';
// const DB_HOST='localhost';

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `${DATABASE_URL}`,
   { logging: false, native: false, dialect:"postgres", dialectModule: pg },
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize);
UserModel(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.hasMany(Favorite);

Favorite.belongsTo(User)




module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
