const {DataTypes} = require ('sequelize');
const bcrypt = require("bcryptjs");

const User = (sequelize) =>{
    sequelize.define('User',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
             
        },

        username:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                 validateUsername(value){
                    // console.log(value)
                    const regexUsername = /^[a-zA-Z0-9-_]{3,20}$/;
                    if(!regexUsername.test(value)){
                        console.log("username error&&&&&&", value)
                       throw new Error(` The username must be between 3 and 20 characters long, only alphanumeric characters and special characters "-" or "_" accepted `)
                    }
                }

            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        profilePicture:{
            type: DataTypes.STRING,
            allowNull: true,
        },

    },
    
    { 
        timestamps:true,
        // paranoid: true
    })
}

module.exports = User;