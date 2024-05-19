import { useSelector, useDispatch } from "react-redux";
import {  orderData, filterGender,  filterSpecies, filterStatus, getFav} from "../redux/actions";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import LandingPage from "../components/LandingPage";


import '../css/Home.css'
import '../css/Card.css'




export default function Home(){

    const [errors, setErrors] = useState(false);
    const [filters, setFilters] = useState(false);
    const [landingPage, setLandingPage] = useState(true);

    
    // console.log("cookie:  ",cookie)
    const dispatch = useDispatch();

    const searchData =   useSelector((state)=>{return state.filteredData});
    // console.log("searchData   ", searchData)


    function handleOrder(evento){
        // console.log("handle")
        dispatch(orderData(evento.target.value))

    }
    
    function handleFilterGender(evento){
        // console.log("handle")
        dispatch(filterGender(evento.target.value))
    }

    function handleFilterSpecies(evento){
        dispatch(filterSpecies(evento.target.value))
    }

    function handleFilterStatus(evento){
        dispatch(filterStatus(evento.target.value))
    }


    useEffect(() => {
        
       
        if(searchData.length <1){
            setErrors("No results Found");
            setFilters(false)
        }
        if(searchData.length >0){
            // console.log(filters)
                // setsetLandingPage(false)
                setFilters(true)}

    
                setLandingPage(false)
        
        return(()=>{
            // console.log("!!!!!!!!!!!!unmounting")
            setErrors(false)
            
        })
    }, [searchData]);
    
    useEffect(()=>{
        dispatch(getFav())
        // console.log("mounting!!!!!!!!!")
        if(searchData.length <1){setLandingPage(true)}
        setErrors(false)

        // return(()=>{
        //     if(searchData.length <1){setLandingPage(true)}
        // })
    },[])



    return(
        <>
                <SearchBar />
                
                {
                    landingPage &&
                    <LandingPage/>
                }
            <div>
                {
                    filters && 
                    <Filters handleOrder={handleOrder} handleGender={handleFilterGender} 
                handleSpecies={handleFilterSpecies}  handleStatus={handleFilterStatus} />
                }
                
            </div>
           { 
                errors && 
                <div className="error-message">
                    
                    <p> {errors} </p>
                    
                </div>
            }
        
            <div className="cards">
                {
                searchData.map((card)=>{
                    
                    return(
                        <Card 
                        key={card.id+card.type}
                        api_id={card.id} 
                        name={card.name} 
                        image={card.image} 
                        type={card.type} />
                    )
                })}
            </div>
                
            
            
            
            
            
          

        </>
        
    )
}