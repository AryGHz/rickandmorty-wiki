import './css/App.css';
import './css/index.css';

import {Route,Routes} from 'react-router-dom'

import About from './pages/About.jsx';
import AccountDeleted from './pages/AccountDeleted.jsx';
import ContactForm from './pages/ContactForm.jsx';
import Details from './pages/Details.jsx';
import Error from './pages/Error.jsx';
import Favorites from './pages/Favorites.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Help from './pages/Help.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Privacy from './pages/Privacy.jsx';
import Profile from './pages/Profile.jsx';
import Register from './pages/Register.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import Terms from './pages/Terms.jsx';

import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';

import {AuthProvider} from './context/authProvider.jsx';


export default function App(){

   return (
      <div className='App'>
         
         <AuthProvider>
            <Nav />
            <Routes>
            <Route path="/register" element={<Register/>} /> 
               <Route path="/login" element={<Login/>}  />
               <Route path="/" element={<Home/>} />
               <Route path="/about" element={<About/>}/>
               <Route path="/help" element={<Help/>}/>
               <Route path="/terms" element={<Terms/>} />
               <Route path="/privacy" element={<Privacy/>} />
               <Route path="/contactform" element={<ContactForm/>} />
               <Route path="/forgotpassword" element={<ForgotPassword/>} />
               <Route path="/resetpassword/:token" element={<ResetPassword/>} />
               <Route path="/deleted" element={<AccountDeleted/>} /> 
               <Route path="/*" element={<Error/>} /> 
               <Route element={<ProtectedRoutes/>}>
                  <Route path="/details/:resource/:id" element={<Details/>} /> 
                  <Route path="/favorites" element={<Favorites/>} />  
                  <Route path="/profile" element={<Profile/>} /> 
               </Route>
            </Routes>
            <Footer/>
           
         </AuthProvider>
         
         
         
         
      </div>
   );

}


