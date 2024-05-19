
import { GET_FAV, ADD_FAV,REMOVE_FAV, FILTER_FAV, ORDER_FAV, GET_DATA, FILTER_GENDER_DATA, FILTER_LOCATION_DATA, FILTER_SPECIES_DATA, FILTER_STATUS_DATA, ORDER_DATA, CLEAR_DATA } from "./types";


const initialState ={
    myFavorites:[],
    allCharacters: [],
    searchData: [],
    filteredData: []
}

const rootReducer = (state=initialState, {type, payload})=>{
    switch(type){

        case GET_FAV:
            // console.log("get fav ==",state.allCharacters)
            // console.log("get fav ==",state.myFavorites)
            
            // return{
            //     ...state,
            //     allCharacters:[...state.allCharacters,action.payload],
            //     myFavorites: [...state.allCharacters,action.payload]
            // }
            return { ...state, myFavorites: payload, allCharacters: payload };

        
        case ADD_FAV:
            console.log(state.allCharacters)
            console.log(state.myFavorites)
            
            // return{
            //     ...state,
            //     allCharacters:[...state.allCharacters,action.payload],
            //     myFavorites: [...state.allCharacters,action.payload]
            // }
            return { ...state, myFavorites: payload, allCharacters: payload };

        case REMOVE_FAV:
            console.log(state.myFavorites) 
            //     ...state,
            //     allCharacters: state.allCharacters.filter((e)=> e.id=! action.payload),
            //     myFavorites: state.allCharacters.filter((e)=> e.id=! action.payload)
            // }

            return { ...state, myFavorites: payload, allCharacters: payload };

            
        case FILTER_FAV:
            console.log(state.myFavorites)
            // console.log(state.allCharacters)
            if (payload === "all") {
                return {
                    ...state,
                    allCharacters: [...state.myFavorites]
                }
            }else{
                return{
                    ...state,
                    // allCharacters: [...state.myFavorites],
                    allCharacters: [...state.myFavorites].filter((e)=> e.type=== payload)
                }
            }
           
        case ORDER_FAV:
            // console.log("order allChars ==",state.allCharacters)
            // console.log("order myFav ==",state.myFavorites)
                if (payload === "A"){
                    return{
                        ...state,
                        allCharacters: [...state.allCharacters].sort((a,b)=>{
                            const aa = a.name;
                            const bb = b.name;
                            
                           if(aa<bb){
                            return -1
                           };
                           if(aa>bb){
                            return 1
                           };
                           return 0;
                
                        })
                }
                }if (payload === "D"){
                    return{
                        ...state,
                        allCharacters: [...state.allCharacters].sort((a,b)=>{
                            const aa = a.name;
                            const bb = b.name;
                            
                           if(aa<bb){
                            return 1
                           };
                           if(aa>bb){
                            return -1
                           };
                           return 0;
                
                        })
                    }
                }
        
                

        case GET_DATA:
             
            return { ...state, searchData: payload, filteredData: payload };

        case ORDER_DATA:
                    if (payload === "A"){
                        return{
                            ...state,
                            filteredData: [...state.searchData].sort((a,b)=>{
                                const aa = a.name;
                                const bb = b.name;
                                
                               if(aa<bb){
                                return -1
                               };
                               if(aa>bb){
                                return 1
                               };
                               return 0;
                    
                            })
                    }
                    }if (payload === "D"){
                        return{
                            ...state,
                            filteredData: [...state.searchData].sort((a,b)=>{
                                const aa = a.name;
                                const bb = b.name;
                                
                               if(aa<bb){
                                return 1
                               };
                               if(aa>bb){
                                return -1
                               };
                               return 0;
                    
                            })
                        }
                    }
        
        case FILTER_GENDER_DATA:
            
            if (payload === "all") {
                return { ...state, filteredData: state.searchData };
            }else{
                return{...state, filteredData: [...state.searchData].filter((e)=> e.gender=== payload)}
            
            }
        
        case FILTER_LOCATION_DATA:
        
        if (payload === "all") {
            return { ...state, filteredData: state.searchData };
        }else{
            return{...state, filteredData: [...state.searchData].filter((e)=> e.type=== payload)}
        
        }

        case FILTER_SPECIES_DATA:
        
        if (payload === "all") {
            return { ...state, filteredData: state.searchData };
        }else{
            return{...state, filteredData: [...state.searchData].filter((e)=> e.species=== payload)}
        
        }

        case FILTER_STATUS_DATA:
        
        if (payload === "all") {
            return { ...state, filteredData: state.searchData };
        }else{
            return{...state, filteredData: [...state.searchData].filter((e)=> e.status=== payload)}
        
        }

        case CLEAR_DATA:

        return { ...state, searchData: [], filteredData: [] };
  
            
        default:
            return state;
    }
}

export default rootReducer;