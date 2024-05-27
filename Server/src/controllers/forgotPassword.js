const transporter = require('../config/sendEmail');
const {User} = require("../DB_connection");
const createToken = require("../config/createToken");


const forgotPassword = async(req,res)=>{

    try {
        const {FRONT_URL}= process.env;
        const {email} = req.body;
        // console.log(email);


        const userFound = await User.findOne({
            where: {email}
        })

        if(userFound){

            const token  = await createToken({id:userFound.id});

            const url =`${FRONT_URL}/resetpassword/${token}`

            const sendEmail = await transporter.sendMail({
                from: '"Rick and Morty Wiki" <noreply@rickandmorty.com>',
                to: `${email}`, 
                subject: "Reset Password", 
                text: "", 
                html: `<h1>Hi ${userFound.username}</h1>
                    <h2>We received a request to reset your password. To do so, click the link below. This link is valid for twenty-four hours and can only be used once.</h2>
                    <a href="${url}">${url}</a>`,
            })

              return res.status(200).json({message:sendEmail.status});

        }
        
        return res.status(404).json({message:'User not found', status:404})
       
          
        
          
        } catch (error) {
            return res.status(500).json({error:error.message, status:500})
        }
   



}

module.exports = forgotPassword;