import React, { useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import Filter from "../components/Filters";
import { getFav, filterFav,  orderFav,  } from "../redux/actions";
import { useAuthContext } from "../context/authProvider";

import '../css/Favorites.css'
import "../css/Card.css"


export default function Favorites(){

    const {sessionData} = useAuthContext()
  

    const allChars = useSelector((state)=>{return state.allCharacters});
    
    const dispatch = useDispatch();

    function handleOrder(evento){
        dispatch(orderFav(evento.target.value))

    }

    function handleFilterType(evento){
    //    console.log(evento.target.value)
       dispatch(filterFav(evento.target.value))
    }

    
    useEffect(() => {
        dispatch(getFav({token:sessionData.token}))
    }, []);
    
    return (
    <div className="favorites-container">
        <section  className="favorites-title">
            <h1>My Favorites</h1>
        </section>
        
        
        <div >
            <div id="favorites-filters">
            <Filter handleOrder={handleOrder} handleType={handleFilterType}/>
            </div>
        <div className="cards">
            {
                allChars.map((character)=>{
                    return(
                        <Card key={character.api_id + character.type} api_id={character.api_id} name={character.name} image={character.image} type={character.type} />
                    )
                })
            } 
        </div>
    
        </div>
    </div>);
}
