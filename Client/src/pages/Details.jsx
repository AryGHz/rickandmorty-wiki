import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../routes/axiosConfig";
import { useAuthContext } from "../context/authProvider";
import Card from "../components/Card";
import "../css/Details.css"
import locationImage from '../css/images/rickandmorty_location.jpg'
import episodeImage from '../css/images/rickandmorty-episode.jpeg'

export default function Details(){

    const {sessionData} = useAuthContext()
    
    
    const {resource,id} = useParams();

    const [loading, setLoading] = useState('Loading');
   
    const [info, setInfo] = useState({});

    const[detailsArray, setDetailsArray] = useState([])


    useEffect(()=>{
        async function detail(){
            try {
                const data = await getDetails(resource,id,{token:sessionData.token});
             setInfo(data[0]);
            setDetailsArray(data[1])
            setLoading('')
            } catch (error) { 
                
                // console.log(error)
            }
            
        }
        detail()

         return setInfo({});
    },[id])

    useEffect(()=>{
      
        return setLoading('Loading...')

    },[])
    
    return(
        <>
        <h1 className="details-loading">{loading}</h1>
        {resource === "character" &&
            <div className="details">
            <section className="details-first-section">
                <img  src={info.image} alt={info.name} />
                <div >
                    <h2>Name: <span>{info.name}</span>  </h2>
                    <h2>Status: <span>{info.status}</span> </h2>
                    <h2>Type: <span>{info.type || "Unknown"}</span> </h2>
                    <h2>Species: <span>{info.species}</span> </h2>
                    <h2>Gender:<span>{info.gender}</span> </h2>
                    <h2>Origin: <span>{info.origin?.name}</span> </h2>
                    <h2>Location: <span>{info.location?.name}</span> </h2>
                </div>
            </section>
            <section className="details-second-section">
                <h1>Episodes</h1>
                <div className="details-second-section-div">
                    {detailsArray.map((episode)=>{
                        return(

                            <Card key={episode.id} api_id={episode.id} name={episode.name} image={episodeImage} type={'episode'}/>
                            
                        )
                    })}
                    
                </div>
            </section> 
            </div>
        }

        {resource === "location" &&
            <div className="details">
            <section className="details-first-section">
                <img  src={locationImage} alt={info.name} />
                <div >
                    <h2>Name: <span>{info.name}</span>  </h2>
                    <h2>Type: <span>{info.type || "Unknown"}</span> </h2>
                    <h2>Dimension: <span>{info.dimension}</span> </h2>
                </div>
            </section>
            <section className="details-second-section">
                <h1>Residents</h1>
                <div className="details-second-section-div">
                    {detailsArray.map((resident)=>{
                        return(

                            <Card key={resident.id} api_id={resident.id} name={resident.name} image={resident.image} type={'character'}/>

                          
                        )
                    })}
                    
                </div>
            </section> 
            </div>
        }

        {resource === "episode" &&
            <div className="details">
            <section className="details-first-section">
                <img  src={episodeImage} alt={info.name} />
                <div >
                    <h2>Name: <span>{info.name}</span>  </h2>
                    <h2>Air Date: <span>{info.air_date}</span> </h2>
                    <h2>Season and Episode: <span>{info.episode}</span> </h2>
                </div>
            </section>
            <section className="details-second-section">
                <h1>Characters</h1>
                <div className="details-second-section-div">
                    {detailsArray.map((character)=>{
                        return(

                            <Card key={character.id} api_id={character.id} name={character.name} image={character.image} type={'character'}/>

                            
                        )
                    })}
                    
                </div>
            </section> 
            </div>
        }       
        
        
        
        </>
        
    )
}

