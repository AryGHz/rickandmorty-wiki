const multer = require('multer');
const path = require('path');
const {v4} = require('uuid')

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/images'),
    filename: function(req,file,cb){
        // console.log(this.filename)
        cb(null, v4() + path.extname(file.originalname) )
    }
})


const upload = multer({
    storage:storage,
    limits:{fileSize: 2000000},
    fileFilter: (req,file,cb)=>{
        const filetypes = /jpeg|jpg|png|gif/;
        const validateFile = filetypes.test(file.mimetype)

        if(validateFile){
            return cb(null, true)
        }else{
            return cb(null, false)
        }

        
    }
});


module.exports = upload;