const transporter = require('../config/sendEmail');

const ContactForm = async(req,res)=>{
    try {
        const {NODEMAILER_EMAIL} = process.env;
        const {name,email,message} = req.body;
        // console.log(NODEMAILER_EMAIL, process.env.NODEMAILER_PASSWORD);

        if(!name || !email || !message){
            return res.status(400).json({error:"Missing Data", status:400})
        }

        const sendEmailtoAdmin = await transporter.sendMail({
                from: '"Rick and Morty Wiki" <noreply@rickandmorty.com>',
                to: `${NODEMAILER_EMAIL}`, 
                subject: "Contact Form", 
                text: "", 
                html: `<h1>Hi</h1>
                    <p>You have received a message from ${email}</p>
                    <p>Name: <strong> ${name} </strong></p>
                    <p>Email: <strong> ${email}</strong></p>
                    <p>Message:</p> 
                    <p><strong> ${message} </strong></p> `,
        })

        const sendConfirmationEmail = await transporter.sendMail({
            from: '"Rick and Morty Wiki" <noreply@rickandmorty.com>',
            to: `${email}`, 
            subject: "Contact Form", 
            text: "", 
            html: `<h1>Hi ${name}</h1>
                <p>Thank you for contacting us. We will send you a response as soon as posible. </p>
                <p>It may take until 24 hours to receive a response, we appreciate your patience</p>
                <br></br>
                <p>Best Wishes</p>
                
                <p>The Rick and Morty Wiki Support Team</p> `,
        })

        // console.log(sendConfirmationEmail.response)

        return res.status(200).json({emailAdmin:sendEmailtoAdmin.response, emailUser:sendConfirmationEmail.response})
        
        // return res.status(200).json("ok",sendEmailtoAdmin.response, sendConfirmationEmail.response)
       
          
        
          
        } catch (error) {
            return res.status(500).json({error:error.message, status:500})
        
        }
   



}

module.exports = ContactForm;