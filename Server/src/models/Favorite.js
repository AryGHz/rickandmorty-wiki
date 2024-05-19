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
        }, 
        { 
            timestamps: true 
        },
        { 
            tablename: "favorites" 
        },
    );
};


module.exports = Favorite;