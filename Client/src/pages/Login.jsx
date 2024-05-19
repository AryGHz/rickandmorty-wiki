import { useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Form from '../components/Form'
import { Modal } from "../components/Modal";
import { login } from "../routes/axiosConfig";
import { useAuthContext } from "../context/authProvider";
import "../css/LogAndRegister.css"

export default function Login(){

    const { parseSession}= useAuthContext()
    
    const navigate = useNavigate();

    const[axiosErrors, setAxiosErrors] = useState({});
    const[modal, setModal] = useState(false);

    const loginUser = async(loginData)=>{

        const data = await  login(loginData);

        if(Object.keys(data).includes('error')){

            setAxiosErrors(data.error)
            // data.status === 404 && setAxiosErrors({email:data.error});
            // data.status === 403 && setAxiosErrors({password:data.error})
            setModal(true)
            // console.log(axiosErrors)

        }

        if (data.username) {
           
            window.sessionStorage.setItem('sessionData', JSON.stringify(data));
            parseSession()
            navigate('/');
            
        }
        // console.log("userData",userData)
        // }
   
}
    const activeInput={
      
        email:true,
        password:true,
    }

    return(
        <div className="log">
            {
                modal && 
                <Modal isActive={modal} message={axiosErrors} closeModal={()=>setModal(false)} />
            }
            <div className="log-div1">
                <h1>Rick and Morty App </h1>
                <Form  activeStatus={activeInput}  axiosFunction={loginUser} submitButton={"LOGIN"} axiosError={axiosErrors} />

                <section>
                <NavLink to={"/forgotpassword"} className="link"> Forgot Password?</NavLink>
                </section>  
                
                <section>
                    <p >Don't have an account?   </p>
                    <NavLink to={"/register"} className="link"> Register</NavLink>
                    
                </section>   
                          
            </div>
            
        </div>
        
        
    )
}