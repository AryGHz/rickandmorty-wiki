
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/authProvider"

export default function ProtectedRoutes(){

    const{sessionData}= useAuthContext();



    return( <>
                {
                sessionData.username
                
                 ? 
                <Outlet/>
                :
                <Navigate to={"/login"}/>
                }
            </>
    )    
}