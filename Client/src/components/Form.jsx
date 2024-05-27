import "../css/Form.css"
import { useEffect, useState } from "react";


import Validation from "./Validation";

export default function Form({activeStatus, axiosFunction, submitButton, axiosError}){

    const [isActive, setIsActive] = useState(activeStatus)
    const [inputData, setInputData] = useState({})
    const [errors, setErrors] = useState({})
 

    const handleChange= ({target})=>{
        
        const{value,name}= target
     
       
         if(name === 'profilePicture'){
            if(target.files.length>0){
                setInputData(target.files[0])
              
            }
       
        }else{
        setInputData({
            ...inputData,
            [name]:value
        })
        
        
        }
    }

    const handleSubmit= async (e, axiosFunction)=>{

        e.preventDefault();

        // console.log(inputData)

        if(Object.keys(errors).length<1){
            await axiosFunction(inputData);
        }
       
    }


    useEffect(()=>{
     
        setIsActive(activeStatus)
      
    },[])

    useEffect(()=>{

        setErrors(Validation(inputData,activeStatus));

    },[inputData])

    useEffect(()=>{
        if(Object.keys(axiosError).length<1){
            setInputData({})
            setErrors({})
        }
    },[axiosError])


    return(
        <div className="form">
            
                <form  onSubmit={(e)=>handleSubmit(e, axiosFunction)}>
                    

                        <div>

                            {   
                                isActive.image &&
                                <>
                                    {/* <label >Update my Profile Picture</label> */}
                                    {/* <input  id="input-img" name="profilePicture" type="image" placeholder="Upload Image" onChange={handleChange} required /> */}
                                    {/* <span>{errors.upload}</span>  */}
                                </>
                                 
                            }
                            {   
                                isActive.username &&
                                <>
                                    <label>Name</label>
                                    <input    name="username" type="text" placeholder="Name" onChange={handleChange} required  />
                                    <span>{errors.username}</span>
                                    <span>{errors.userLength}</span> 
                                </>
                                 
                            }
                            {  
                                isActive.email &&
                                <>
                            
                                <label>Email</label>
                            <input   name="email" type="email" placeholder="Email Address" onChange={handleChange} autoComplete="on" required/>
                            <span>{errors.email}</span>
                            </>}

                            

                            {
                               isActive.password &&
                                <>
                                <label>Password</label> 
                                <p>*password must be between 6 and 10 characters long and must contain at least one lowercase, one uppercase and one number</p>
                                <input  name="password" type="password" placeholder="Password" onChange={handleChange} autoComplete="on" required/>
                                <span>{errors.password}</span>
                                </>
                            }
                            
                            {   
                                isActive.confirmPassword &&
                                <>
                                    <label>Confirm Password</label> 
                                    <input  name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />
                                    <span>{errors.mismatch}</span>
                                </>
                            }
                            {
                               isActive.textarea &&
                                <>
                                
                                    <label>Your message</label> 
                                    <textarea name="textarea" type="text" placeholder="Describe your issue" onChange={handleChange} required/>
                                    <span>{errors.textarea}</span>
                                
                                </>
                            }
                            <button className="button" >{submitButton}</button>
                        </div>
                    
                </form>
                
                    
        </div>
    )
}