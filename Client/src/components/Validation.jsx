export default function Validation(data, isActive){
    
    
    const regexpUsername= /^[a-zA-Z0-9-_]{3,20}$/
    const regexEmail = /^[\w.-]{2,}@\w{2,}[.]\w{2,}$/
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{6,10}$/;

    const errors={};

    if(!data.username && isActive.username){
        errors.username = "Username is required"
    }
    
    if(!regexpUsername.test(data.username ) && isActive.username){
        errors.userLength = ` The username must be between 3 and 20 characters long, only alphanumeric characters and special characters "-" or "_" accepted `
        
        
    }

    if(!data.textarea && isActive.textarea){
        errors.textarea = "This field cannot be empty"
    }
    
    if(!regexEmail.test(data.email) && isActive.email){
        errors.email = "Please enter a valid email"
    }if( !regexPassword.test(data.password) && isActive.password){
        errors.password = " The password must be between 6 and 10 characters long and must contain at least one lowercase, one uppercase and one number"
    }
    if(data.password != data.confirmPassword && isActive.confirmPassword){
        errors.mismatch = "password mistmach"
    }
    // console.log(errors)
    return errors;
};