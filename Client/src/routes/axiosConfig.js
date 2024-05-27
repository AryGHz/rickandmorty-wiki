import axios from 'axios';
// import { useAuthContext } from '../context/authProvider';

// const {sessionData}=useAuthContext();
// const token = sessionData.token


export const axiosCustom = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
    withCredentials: true
});



export const getMainCharacters = async ()=> {
   
   try {
        const {data} = await axiosCustom.get('/main');
     return data;
   } catch (error) {
       return([])
   }
   
};

// ---------------------------------

export const register = async (userData)=> {
    try {
        const {data} = await axiosCustom.post('/register', userData);
        // console.log(data)
        return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    }
    
};

export const login = async (userData)=> {
    try {
        const {data} = await axiosCustom.post('/login', userData);
        return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    }
    
};

export const logout = async ()=> {
    
    try {
        const {data} = await axiosCustom.get('/logout');
        return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    }
    
};

// --------------------------------

export const getUserFavorites = async (token)=> {

    try {
        const {data} = await axiosCustom.post('/getfav',token);
        return data;
    } catch (error) {
        console.log(error.response.data)
        return(error.response.data)
    }
   
    
};

export const postUserFavorite = async (bodyData)=> {
    try {
        const {data} = await axiosCustom.post('/postfav',bodyData);
    return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    }
    
    
};

export const deleteUserFavorite = async (type,id,token)=> {
    try {
        const {data} = await axiosCustom.post(`/deletefav/${type}/${id}`,token);
    return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    }
    
    
};

// ------------------------------------

export const searchResource = async (type, id, image,token)=> {

    try {
        console.log(type,id, image,token)
        const {data} = await axiosCustom.post(`/${type}/`,token ,{params: {name: id}});
        // console.log(data)

        await data.forEach(element => {
            if(!element.image){
                element.image = image
            }
            {element.type= type}
        });

        return data
        
    } catch (error) {
        // console.log("axios config",error)
        return([])
    }

    
};

export const getDetails = async (resource,id,token)=> {
    try {
        const {data} = await axiosCustom.post(`/details/${resource}/${id}`, token);
        // console.log(data)
        return(data);
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    }
    
    
};

export const forgotPass = async (email)=> {
    try {
        const data = await axiosCustom.post('/forgotpassword', email);
        // console.log(data)
        return data;
    } catch (error) {
        return(error.response.data)
    }
    
};

export const resetPass = async (passData)=> {
    try {
        const {data} = await axiosCustom.put('/resetpassword', passData);
        // console.log(data)
        return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    }
    
};

// export const updateProfilePicture = async (profileData)=> {
//     try {
//         const {data} = await axiosCustom.put('/updatepicture', profileData);
//         // console.log(data)
//         return data;
//     } catch (error) {
//         // console.log(error)
//         return(error.response.data)
//     } 
// };

export const updateUserInfo= async (profileData)=> {
    try {
        console.log(profileData)
        const {data} = await axiosCustom.put('/updateuser', profileData);
        // console.log(data)
        return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    } 
};

export const deleteUser= async (password)=> {
    try {
        const {data} = await axiosCustom.put('/deleteuser', password);
        // console.log(data)
        return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    } 
};

export const contactSupport= async (messageData)=> {
    try {
        const data = await axiosCustom.post('/contact', messageData);
        // console.log(data)
        return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    } 
};

