import picture from '../css/images/rick-nav4.jpg'
import profilePic from '../css/images/profile-default.png'
import logoutIcon from '../css/images/logout.png'
import loginIcon from '../css/images/login.png'
import settingsIcon from '../css/images/configuraciones.png'

import "../css/Nav.css"
import {useState} from "react";
import {useDispatch } from "react-redux";
import {clearData} from "../redux/actions";
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import {logout} from '../routes/axiosConfig'
import {useAuthContext } from '../context/authProvider';




export default function Nav() {

   const navigate = useNavigate();

   const dispatch = useDispatch();

   const { sessionData, parseSession} = useAuthContext();

   const[menu,setMenu] = useState(false);

   const showMenu= ()=>{
      setMenu(!menu)
      // console.log("menu   " ,menu)
   }

   const logoutUser = async()=>{
     
      await logout();
      // console.log(logoutData)
      dispatch(clearData())
      window.sessionStorage.removeItem('sessionData');
      parseSession();
      // console.log('logout' , sessionData)
      navigate("/login")

  }

   const container1 = 'nav-menu-container';
   const container2 = 'nav-menu-container2';

   const path = useLocation();

   if (path.pathname != "/login"&& path.pathname != "/register") {
      return (
         
         <div className='nav-container'>
            
            <nav className="nav">
               <section className='nav-section1'>
                  <div className="nav-section1-div1">
                     <NavLink  to={"/"} >
                     <img src={picture}  />
                     </NavLink>
                  </div>
                  <div className='nav-section1-div2'>
                     <div className='nav-welcome'>
                        {sessionData.username &&
                        <h1 onClick={showMenu} >Welcome {sessionData.username}</h1>}
                     </div>
                     <div className='nav-links'>
                  
                        <NavLink  to={"/"} >
                           Home
                        </NavLink>
                        
                           <NavLink  to={"/favorites"}  >
                           Favorites
                        </NavLink>
                        
                        
                        <NavLink  to={"/about"} >
                           About
                        </NavLink>
                        <NavLink  to={"/help"} >
                           Help
                        </NavLink>
                     </div>
                  </div> 
               </section>
               <section className='nav-section2'>
                  <img src={sessionData.profilePicture || profilePic} className="nav-profile-picture" onClick={showMenu} /> 
               {/* <div className='nav-profile-container'>
                     
                     
                  </div>  */}
               </section>
               
            </nav>
            {sessionData.username && menu  &&
                <div className='nav-menu-container'>
                <div>
                   <img  src={settingsIcon} />
                   <NavLink to={"/profile"} className="nav-anchor">My Profile</NavLink>
                </div>
                <div>
                   <img  src={logoutIcon} />
                   <NavLink to={"/login"} className="nav-anchor"  onClick={logoutUser}>Log Out</NavLink>
                </div>     
             </div>
            }

            {!sessionData.username && menu  &&
                <div className={`${container1} ${container2}`}>
                <div>
                   <img  src={loginIcon} />
                   <NavLink to={"/login"} className="nav-anchor" >Login</NavLink>
                </div>     
             </div>
            }
           

         </div>
        );
     }
      
   }
   
   

 
