import React, { useState, useEffect } from "react";
import {Link, useLocation} from "react-router-dom"
import {addFav, removeFav} from '../redux/actions'
import {  useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../context/authProvider";
import "../css/Card.css"


 export default function Card({api_id,name,image, type }) {

   const {sessionData}=useAuthContext();

   const [isFav, SetIsFav] = useState(false);

   const myFavorites = useSelector((state)=>{return state.allCharacters})
 
   const dispatch = useDispatch();

   function handleFavorite(){

      if (isFav){
         SetIsFav(false)
         // console.log(api_id, type)
         dispatch(removeFav(type, api_id, {token:sessionData.token} ))
      }
      else{
         SetIsFav(true)
         // changeImage()
         // console.log(replaceImage)
         dispatch(
            addFav({api_id,name, image, type, token:sessionData.token}))
            // console.log(api_id,name,image, type)
      }

      // console.log("handleFav    =",myFavorites)
   }

   const setFavorites = async()=>{
      await  myFavorites.forEach((fav) => {
         if (fav.api_id === api_id && fav.type === type) {
            
            SetIsFav(true);  
        
         }})
   }

   useEffect(() => {
      setFavorites();
     
   }, []);

  

   return (
      
         <div className="card">
            
               <Link to={`/details/${type}/${api_id}`}>
                  <img  src={image} alt={name} />
               </Link>
               <section>
               <div className="text">
                  <h2 >{name}</h2>
                  <Link to={`/details/${type}/${api_id}`}>
                     <button className="details-button" >Details</button>
                  </Link>
                  
               </div>
               {
               
               <div className="favorites">
               {isFav ? (
                     <button onClick={handleFavorite}>Remove from Favorites  ❤️</button>
                     ) : (
                  <button onClick={handleFavorite}>Add to Favorites  🤍</button>
               )} 
               </div>
               }
               </section>
         </div>
      
      
    
      
   );
}


// export function mapStateToProps(state){
//    return{
//       myFavorites: state.myFavorites
//    }
// }

// export function mapDispatchToProps(dispatch){
//    return{
//       addFav: (character)=> dispatch(addFav(character)),
//       removeFav: (id)=> dispatch(removeFav(id))
//    }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Card);

