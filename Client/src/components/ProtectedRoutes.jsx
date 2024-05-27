
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/authProvider"

export default function ProtectedRoutes(){

    const{sessionData}= useAuthContext();



    return( <>
                {
                sessionData.token
                
                 ? 
                <Outlet/>
                :
                <Navigate to={"/login"}/>
                }
            </>
    )    
}