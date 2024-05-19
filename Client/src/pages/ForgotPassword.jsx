import { useState} from "react";
import { forgotPass } from "../routes/axiosConfig";
import Form from "../components/Form";
import { Modal } from "../components/Modal";
import '../css/ForgotAndReset.css'



export default function ForgotPassword(){

    const[loading, setLoading] = useState(false);
    const[modal,setModal] = useState(false);

    const forgotPassword = async(email)=>{
        setLoading(true)
        const data=await forgotPass(email)
        if(data){
            setLoading(false)
            setModal(true);
      
        }
             
    }

    

    return(
        <div className="forgot">
            <h1 className="forgot-h1">
                Reset Password
            </h1>
            <p>If you have an account, you will receive a link to reset your password.</p>
            <Form activeStatus={{email:true}}  axiosFunction={forgotPassword} submitButton={"send link"} axiosError={{}} />
            {
                loading &&
                <p>Please wait......</p>
            }
            { modal && 
                <section id="forgot-set-modal">
                    <Modal isActive={modal} message={'Email send succesfully. Follow the instructions to log back into your account'} closeModal={()=>setModal(false)} />
                </section>
                    
                    
            }
        </div>
        
    )
};