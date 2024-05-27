import { useLocation } from "react-router-dom";
import "../css/Filters.css";

export default function Filters({handleOrder,handleGender,handleSpecies,handleStatus, handleType}){

    const location = useLocation();
    // console.log(location.pathname)
    
    return(
        <div className="filters">
            <div >
                <section className="container-filters" >
                    <div>
                        <h2>Sort</h2>
                        <select onChange={handleOrder}>
                            <option value="A">Ascending</option>
                            <option value="D">Descending</option>
                        </select>
                    </div>
                    {
                        location.pathname === "/favorites" &&
               
                        <div>
                            <h2>Type</h2>
                            <select onChange={handleType}>
                            <option value="character">Character</option>
                            <option value="location">Location</option>
                            <option value="episode">Episode</option>
                            <option value="all">All Favorites</option>
                            </select>
                        </div>
               
                    
            }

                </section>
                
            { location.pathname === "/" &&
                <section className="container-filters" >
                    <div>
                        <h2>Gender</h2>
                        <select onChange={handleGender}>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Genderless">Genderless</option>
                          <option value="Unknown">Unknown</option>
                          <option value="all">All Genders</option>
                        </select>
                    </div>
                  
                    <div>
                       <h2>Species</h2>
                       <select onChange={handleSpecies}>
                             <option value="Human">Human</option>
                             <option value="Alien">Alien</option>
                             <option value="Humanoid">Humanoid</option>
                             <option value="Poopybutthole">Poopybutthole</option>
                             <option value="Mythological Creature">Mythological Creature</option>
                             <option value="Robot">Robot</option>
                             <option value="Cronenberg">Cronenberg</option>
                             <option value="unknown">Unknown</option>
                             <option value="all">All Species</option>
                       </select>
                    </div>
                    <div>
                        <h2>Status</h2>
                        <select onChange={handleStatus}>
                              <option value="Alive">Alive</option>
                              <option value="Dead">Dead</option>
                              <option value="unknown">Unknown</option>
                              <option value="all">All Status</option>
                        </select>
                    </div>
                </section>
            }
            
                 
        </div>
        </div>
       

    )
}