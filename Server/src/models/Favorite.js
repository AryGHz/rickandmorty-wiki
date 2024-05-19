const { DataTypes } = require('sequelize');
// const { Favorite } = require('../DB_connection');

const Favorite = (sequelize) => {
   sequelize.define('Favorite', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
         
    },
    api_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    // status:{
    //     type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
    //     allowNull: false,
        
    // },
    // species:{
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // gender:{
    //     type: DataTypes.ENUM('Female', 'Male', 'Genderless','Unknown'),
    //     allowNull: false,
        
    // },
    // origin:{
    //     type: DataTypes.STRING,
        
    // },
    image:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'type cannot be an empty string'
            }
        }
       
    },
   }, { timestamps: true });
};


module.exports = Favorite;