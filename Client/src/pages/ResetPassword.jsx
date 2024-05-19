import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { resetPass } from "../routes/axiosConfig";
import Form from "../components/Form";
import '../css/ForgotAndReset.css'



export default function ResetPassword(){
    

    const {token} = useParams();
    // console.log(token)
    
    const axiosError = {};

    const[message,setMessage] = useState({})

    const active={
        password:true,
        confirmPassword:true,
    }

    const resetPassword = async(inputData)=>{
        const body = {
            token: token,
            password: inputData.password
        }
        const data = await resetPass(body)

        if(data.username){
            setMessage({success: true})
        }else{
            setMessage({error:true})
        }
    }

    
    return(
        <div className="forgot">
            { 
            message.success && 
            <section>

            <h2>Password Updated! </h2>
            <NavLink to={'/login'} >Login</NavLink>
            </section>
            }

            { 
            message.error && 
            <section>

            <h2>The link has expired.</h2>
            <NavLink to={'/forgotpassword'} >request a new link. </NavLink>
            </section>
            }

            
            
            <h1>
                Reset Password
            </h1>
            
            <Form activeStatus={active}  axiosFunction={resetPassword} submitButton={"reset password"} axiosError={axiosError}/>
            
        </div>
        
    )
};