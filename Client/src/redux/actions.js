
import { getUserFavorites, postUserFavorite, deleteUserFavorite, searchResource } from "../routes/axiosConfig";
import { GET_FAV, ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV, GET_DATA, FILTER_GENDER_DATA, FILTER_LOCATION_DATA, FILTER_SPECIES_DATA, FILTER_STATUS_DATA, ORDER_DATA, CLEAR_DATA  } from "./types"


export const getFav = (token) => {

   return async (dispatch) => {
      const data = await getUserFavorites(token);
      // console.log("getFav  ", data) 
      // console.log(Array.isArray(data))
      if(Array.isArray(data)){
         return dispatch({
            type: GET_FAV,
            payload: data,
         });
      }
   } 
   
};


export const addFav = (bodyData) => {
   return async (dispatch) => {
      const data = await postUserFavorite(bodyData);
      // console.log("getFav  ", data) 
      if(!data.error){
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      }
   } 
   
};


export const removeFav = (type, api_id, token) => {
  
   return async (dispatch) => {
      const data= await deleteUserFavorite(type, api_id, token)
      // console.log(data);
      if(Array.isArray(data)){
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      }
     
   }
};

export function filterFav(type){
   return {
       type: FILTER_FAV,
       payload: type
   }
}

export function orderFav(order){
    return {
        type: ORDER_FAV,
        payload: order
    }
}

// ---------------------------


export function getData(type, id, image, token){
   return async (dispatch) => {
      const response= await searchResource(type, id, image, token);
      // console.log("getData  ", response)
      if(!response.error){
         return dispatch({
            type: GET_DATA,
            payload: response,
         });
      }
   }
};


export function filterGender(gender){
   // console.log("action gender", gender)
   return {
       type: FILTER_GENDER_DATA,
       payload: gender
   }
}

export function filterLocation(location){
   return {
       type: FILTER_LOCATION_DATA,
       payload: location
   }
};

export function filterSpecies(species){
   return {
       type: FILTER_SPECIES_DATA,
       payload: species
   }
}

export function filterStatus(status){
   return {
       type: FILTER_STATUS_DATA,
       payload: status
   }
};


export function orderData(order){
   return {
       type: ORDER_DATA,
       payload: order
   }
}

export const clearData=()=>{
   return{
      type: CLEAR_DATA
   }
}


