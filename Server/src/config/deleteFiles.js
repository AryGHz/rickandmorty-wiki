const path = require('path');
const fs = require('fs');


const deleteFiles = (filename)=>{

    const destination= path.join(__dirname, '../../public/images',filename);
    console.log('destination----', destination)
    fs.unlink(destination, (error)=>{
        if(error){
            console.log("error",error)
        }else{
            console.log('deleted')
        }
    })
}
module.exports = deleteFiles;