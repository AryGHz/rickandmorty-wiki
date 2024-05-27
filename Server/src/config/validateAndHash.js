const bcrypt = require('bcryptjs');

const validateAndHash= async(pass)=>{
    // console.log(pass);

    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{6,10}$/;

        if(!regexPassword.test(pass)){
        throw new Error (`The password must be between 6 and 10 characters long and must contain at least one lowercase, one uppercase and one number`)
        }
        else{
            
            const hashedPass =  await bcrypt.hash(pass,10);
            return hashedPass;
        }
       
};

module.exports = validateAndHash;