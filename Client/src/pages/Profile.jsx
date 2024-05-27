import "../css/Profile.css";
import profilePic from '../css/images/profile-default.png';
import profileFart from '../css/images/profile-fart.jpg'
import profileHead from '../css/images/profile-head.jpg'
import profileJerry from '../css/images/profile-jerry.jpg'
import profileMorty from '../css/images/profile-morty.jpg'
import profilePoopy from '../css/images/profile-poopy.jpg'
import profileRick from '../css/images/profile-rick.jpg'
import profileSnowball from '../css/images/profile-snowball.jpg'
import profileSummer from '../css/images/profile-summer.jpg'



import moment from 'moment'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch } from "react-redux";
import {clearData} from "../redux/actions";
import { useAuthContext } from "../context/authProvider";
import {  updateUserInfo, deleteUser } from "../routes/axiosConfig";
import { Modal } from "../components/Modal";
import Form from "../components/Form";

export default function Profile(){

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const{sessionData, parseSession} = useAuthContext();
    // console.log(userData)

    const date = moment(sessionData.createdAt).format("MMM Do YY");

    const[menu,setMenu] = useState({});
    const[axiosErrors, setAxiosErrors] = useState({});
    const[modal,setModal] = useState(false);
    const[successMessage,setSuccessMessage] = useState('');
    const[profilePicture,setProfilePicture] = useState(sessionData.profilePicture || profilePic);
    const[pictureName,setPictureName] = useState(false);




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
        }else if(target.innerText === 'Modify Profile Picture'){
            setMenu({picture: true})
            // console.log(menu)
        }

    
    }

    const handleImage =(e)=>{
        setProfilePicture(e.target.currentSrc)
        setPictureName(e.target.currentSrc)
        console.log(e.target.currentSrc)
    }

    const updateUser = async(data)=>{

            console.log(data)
            const newData = await updateUserInfo({profilePicture:pictureName, username:data.username, password:data.password, token:sessionData.token});

            console.log(Object.keys(newData)[0])
            
            if(newData.error){
                setAxiosErrors('Error, please try again later')
                setModal(true);

            }else{

                const updatedName =Object.keys(newData)[0];
                const updatedValue = Object.values(newData)[0];
                const updatedSessionData = {...sessionData, [updatedName]:updatedValue}
                window.sessionStorage.setItem('sessionData', JSON.stringify(updatedSessionData));
                parseSession();
                setPictureName(false)
                setSuccessMessage(`${updatedName} updated!`)
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);

                console.log(sessionData)
    
            }
    };

    const deleteUserAccount = async(inputData)=>{
        const deleteStatus  = await deleteUser({password:inputData.password, token:sessionData.token});
            if(deleteStatus.userStatus){
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
                <div>
                    <img className="profile-section1-img" src={profilePicture}></img>
                <h3 onClick={showMenu} >Modify Profile Picture</h3>
                {
                    menu.picture &&
                    <div id="profileSubmitButton"  >
                        <div>
                            <p>Select your Profile Picture</p>
                            <img src={profilePic} onClick={handleImage} ></img>
                            <img src={profileFart} onClick={handleImage} ></img>
                            <img src={profileHead} onClick={handleImage} ></img>
                            <img src={profileJerry} onClick={handleImage} ></img>
                            <img src={profileMorty} onClick={handleImage} ></img>
                            <img src={profilePoopy} onClick={handleImage} ></img>
                            <img src={profileRick} onClick={handleImage} ></img>
                            <img src={profileSnowball} onClick={handleImage} ></img>
                            <img src={profileSummer} onClick={handleImage} ></img>
                        </div>
                        
                        
                        < Form  activeStatus={{image:true}} axiosFunction={updateUser} submitButton={"Update Profile Picture"} axiosError={axiosErrors}/>
                        <p> {successMessage}</p>
                    
                        
                    </div>
                    
                }
                </div>
                <div id="second-div" className="profile-section1-div1">
                    <h2>My Personal Info</h2>
                    <p>Username </p>
                    <span>{sessionData.username}</span>
                    <p>Email  </p>
                    <span>{sessionData.email}</span>
                    <p>Member since </p>
                    <span>{date}</span>
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

                        <p> {successMessage}</p>
                    }
                        
                    </div>
                    
                }
                <h3 name='password' onClick={showMenu} >Change Password</h3>
                {
                     menu.password &&
                    <div>
                        
                         <Form  activeStatus={{password:true,confirmPassword:true}} axiosFunction={updateUser} submitButton={"Update Password"} axiosError={axiosErrors}/>
                        {

                            <p> {successMessage}</p>
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