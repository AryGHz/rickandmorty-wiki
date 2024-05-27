import {  useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Form from "../components/Form"
import  {Modal}  from "../components/Modal"
import { register } from "../routes/axiosConfig"
import "../css/LogAndRegister.css"

import { useAuthContext } from "../context/authProvider";

export default function Register(){
    
    const navigate = useNavigate();
    const{parseSession} = useAuthContext();

    const active={
        username:true,
        email:true,
        password:true,
        confirmPassword:true,
    }
    const[axiosErrors, setAxiosErrors] = useState({});
    const[modal,setModal] = useState(false);

    const registerUser = async(registerData)=>{
        
            const data = await  register(registerData);
            console.log("data = ",data)

            if(Object.keys(data).includes('error')){
                setAxiosErrors(data.error);
                setModal(true)
            }else{
                window.sessionStorage.setItem('sessionData', JSON.stringify(data));
                parseSession();
                navigate('/');
                
            }
            
    }

    return(
        <>
            {
                modal &&
                <Modal  message={axiosErrors} isActive={modal} closeModal={()=> setModal(false)}/>
            }
            <div className="log">
            <div className="log-div1">
                <h1>Register </h1>
                <Form activeStatus={active} axiosFunction={registerUser} submitButton={"register"} axiosError={axiosErrors}/>
                <section>
                    <p >Already a member?   </p>
                    <NavLink to={"/login"} className="link"> Login </NavLink>
                </section>  
            </div>            
            </div>
        </>
        
    )
};