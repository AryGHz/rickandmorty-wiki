import { useState} from "react"
import Form from "../components/Form"
import { contactSupport } from "../routes/axiosConfig"
import { Modal } from "../components/Modal"
import '../css/Contact.css'


export default function ContactForm(){

    const active={
        username:true,
        email:true,
        textarea:true
    }
    const[message, setMessage] = useState({});
    const[modal, setModal] = useState(false)
    const[axiosErrors, setAxiosErrors] = useState(false);

    const contactForm = async(registerData)=>{
        setMessage({loading:true})
        const messageBody = {
                    name:registerData.username,
                    email:registerData.email,
                    message:registerData.textarea,
                }

                // console.log("messagebody",messageBody);
 
        const data = await  contactSupport(messageBody);
        // console.log("data = ",data)
            if(data.status === 200){
                setMessage({success:true})

            }else{
                setAxiosErrors({
                    error:'Failed to send message'
                });
                setModal(true)
            }

    }

    return(
        <div className="contact">

            <Modal isActive={modal} message={axiosErrors} closeModal={()=>setModal(false)} />

            <Form activeStatus={active}  axiosFunction={contactForm} submitButton={"send"} axiosError={axiosErrors} />
            {
                message.loading &&
                <p>Please wait......</p>
            }
            {
                message.success &&
                <h2>Email sent succesfully</h2>
            }
        </div>
    )
}