import "../css/Profile.css";
import profilePic from '../css/images/profile-picture.png'
import moment from 'moment'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch } from "react-redux";
import {clearData} from "../redux/actions";
import { useAuthContext } from "../context/authProvider";
import { updateProfilePicture, updateUserInfo, deleteUser } from "../routes/axiosConfig";
import { Modal } from "../components/Modal";
import Form from "../components/Form";

export default function Profile(){

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const{sessionData, parseSession} = useAuthContext();
    // console.log(userData)

    const date = moment(sessionData.createdAt).format("MMM Do YY");

    const[menu,setMenu] = useState(false);
    const[axiosErrors, setAxiosErrors] = useState({});
    const[modal,setModal] = useState(false);
    const[successMessage,setSuccessMessage] = useState({});



    const showMenu= ({target})=>{

        if(target.innerText === 'Modify Username'){
        setMenu({username: true})
        // console.log(menu)
        }else if(target.innerText === 'Change Password'){
            setMenu({password: true})
            // console.log(menu)
        }else if(target.innerText === 'Delete Account'){
            setMenu({delete: true})
            // console.log(menu)
        }
    
    }

    const updateImage = async(imageData)=>{
        const format = new FormData();
        format.append('image',imageData);
        const submit = await updateProfilePicture(format);
        // console.log(submit);
        if(submit.error){
            setAxiosErrors('cannot upload this filetype')
            setModal(true)
        }else{
            window.sessionStorage.setItem('sessionData', JSON.stringify(submit));
        parseSession();

        }
        // console.log("update image", sessionData)

    };

    const updateUser = async(data)=>{

            const newData = await updateUserInfo({username:data.username, password:data.password});
            if(newData.username){
                window.sessionStorage.setItem('sessionData', JSON.stringify(newData));
                parseSession();
                if(menu.username){
                    setSuccessMessage({username:"username updated!"});
                    setTimeout(() => {
                        setSuccessMessage({});
                    }, 3000);
                }
                if(menu.password){
                    setSuccessMessage({password:"password updated!"});
                    setTimeout(() => {
                        setSuccessMessage({});
                    }, 3000);
                }
            
            
            }else{
                // console.log("error",newData)
                setAxiosErrors(newData.error);
                setModal(true)
            }
        
            // console.log("update user", sessionData)
    };

    const deleteUserAccount = async(password)=>{
        const deleteStatus  = await deleteUser(password);
            if(deleteStatus.success){
                dispatch(clearData())
                window.sessionStorage.removeItem('sessionData');
                parseSession();
                navigate('/deleted')

            }else{
                // console.log("error",deleteStatus)
                setAxiosErrors(deleteStatus.error);
                setModal(true)
            }
    };


    return(
        <div className="profile">
             {
                modal && 
                <Modal isActive={modal} message={axiosErrors} closeModal={()=>setModal(false)} />
            }
            <h1 className="profile-h1">Profile Settings</h1>
            
            <section className="profile-section1">
                <div id="second-div" className="profile-section1-div1">
                    <h2>My Personal Info</h2>
                    <p>Username </p>
                    <span>{sessionData.username}</span>
                    <p>Email  </p>
                    <span>{sessionData.email}</span>
                    <p>Member since </p>
                    <span>{date}</span>
                </div>
            <div>
                <img alt="profile" src={sessionData.profilePicture || profilePic} className="profile-picture" /> 

                <Form activeStatus={{image:true}} axiosFunction={updateImage} submitButton={"Update Picture"} axiosError={axiosErrors} />
            </div>
           
            </section>
            <section className="profile-section2">
                <h2>Security</h2>
                <h3 onClick={showMenu} >Modify Username</h3>
                {
                    menu.username &&
                    <div>
                   
                         <Form  activeStatus={{username:true}} axiosFunction={updateUser} submitButton={"Update Username"} axiosError={axiosErrors}/>
                    {

                        <p> {successMessage.username}</p>
                    }
                        
                    </div>
                    
                }
                <h3 name='password' onClick={showMenu} >Change Password</h3>
                {
                     menu.password &&
                    <div>
                        
                         <Form  activeStatus={{password:true,confirmPassword:true}} axiosFunction={updateUser} submitButton={"Update Password"} axiosError={axiosErrors}/>
                        {

                            <p> {successMessage.password}</p>
                        }

                    </div>
                }

            </section>
            <section className="profile-section3">
            <h2 onClick={showMenu} >Delete Account</h2>
                {
                     menu.delete &&

                    <div>
                         <h3>Are you sure you want to delete your Rick and Morty Account?. if you're having problems, please <Link to={'/contact'}>contact our support team</Link> to asist you.</h3>
                         <h3>Deleting your account will remove yor personal information, profile pictures and favorites. </h3>
                         <h3>If you want to continue, introduce your password and click on "Delete my account"</h3>
                        
                        <div id="profile-delete-button">

                         <Form  activeStatus={{password:true,confirmPassword:true}} axiosFunction={deleteUserAccount} submitButton={"Delete my Account"} axiosError={axiosErrors}/>

                        </div>
                        
                    </div>
                }
            </section>
            
           
        
        </div>
    )
}