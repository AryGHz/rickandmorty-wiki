import axios from 'axios';


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

export const getUserFavorites = async ()=> {

    try {
        const {data} = await axiosCustom.get('/fav');
        return data;
    } catch (error) {
        // console.log(error.response.data)
        return(error.response.data)
    }
   
    
};

export const postUserFavorite = async (character)=> {
    try {
        const {data} = await axiosCustom.post('/fav',character);
    return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    }
    
    
};

export const deleteUserFavorite = async (type,id)=> {
    try {
        const {data} = await axiosCustom.delete(`/fav/${type}/${id}`);
    return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    }
    
    
};

export const searchResource = async (type, id, image)=> {

    try {
        // console.log(type,id, image)
        const {data} = await axiosCustom.get(`/${type}/`,{params: {name: id}});
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

export const getDetails = async (resource,id)=> {
    try {
        const {data} = await axiosCustom.get(`/details/${resource}/${id}`);
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

export const updateProfilePicture = async (picture)=> {
    try {
        const {data} = await axiosCustom.put('/updatepicture', picture);
        // console.log(data)
        return data;
    } catch (error) {
        // console.log(error)
        return(error.response.data)
    } 
};

export const updateUserInfo= async (passData)=> {
    try {
        // console.log(passData)
        const {data} = await axiosCustom.put('/updateuser', passData);
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

