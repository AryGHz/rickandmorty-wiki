import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = ()=>{

    const context = useContext(AuthContext);
    
    if(!context) {
        throw new Error("There is no AuthProvider")
    }
    return context;
}


export  function AuthProvider({children}){
  
    // const [cookie, setCookie, removeCookie] = useCookies();
   
    const [sessionData, setSessionData] = useState(()=>{
        const data = window.sessionStorage.getItem('sessionData')
        // console.log("validate",data)
        if(data){
            
            return(JSON.parse(data));
        }else{
            return {}
            
        }
    });

    const parseSession = ()=> {
        const data = window.sessionStorage.getItem('sessionData')
        // console.log("parse",data)
        if(data){
            
            const parse = JSON.parse(data)
            // console.log("parse",parse)
            setSessionData(parse);
            // setUserData(JSON.parse(data));
        }else{
            setSessionData({});
            // setUserData(sessionData)
        }
        // console.log("sessionData",sessionData)
        // console.log("userData",userData)
    };

    return(
        <AuthContext.Provider value={{
            // cookie,
            sessionData,
            parseSession,
        }
        }>

            {children}
    
        </AuthContext.Provider>
    )

    
};