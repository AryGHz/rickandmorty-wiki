import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import { getData } from '../redux/actions';
import '../css/SearchBar.css'
import searchIcon from '../css/images/search.png'
import locationImage from '../css/images/rickandmorty_location.jpg'
import episodeImage from '../css/images/rickandmorty-episode.jpeg'
import { useAuthContext } from '../context/authProvider';
import { Modal } from './Modal';


export default function SearchBar(){

    const {sessionData} = useAuthContext()

    const [modal, setModal] = useState(false);

    const [input, setInput] = useState("");

    const [radio, setRadio] = useState("character");

    const [image, setImage] = useState('');

    const handleChangeInput=({target})=>{
        setInput(target.value)
        // console.log("input", input)
    }

    const handleChangeRadio=({target})=>{
        setRadio(target.name)
        // console.log("radio", radio)
    };

    const dispatch = useDispatch();

    const onSearch = ()=>{
        if(sessionData.username){
             dispatch(getData(radio,input, image));
        }else{
            setModal(true)
           
        }
       
    }


    useEffect(()=>{
        if(radio==="location"){
            setImage(locationImage)
            // console.log("set Image", image)
        }else if(radio==="episode"){
            setImage(episodeImage)
            // console.log("set Image", image)
        }
    },[radio]);

    return(
        <>
            {
                
                <Modal message={"You need to login to access this resource"} isActive={modal} closeModal={()=> setModal(false)} />
            }
            <div className='searchbar-container'>
            <section className="search">
                <input name="character" type="text" placeholder="Introduce a name, location or episode number" onChange={handleChangeInput}/>
                <div>
                <img alt="search-icon" src={searchIcon} onClick={onSearch}/>
                </div>
           </section>            

           <section className="searchbar-buttons">
                <div className="searchbar-buttons-container">
                    <div>
                        <input name="character" type="radio" onChange={handleChangeRadio} checked={radio==="character"} />
                        <label>Character</label>
                    </div>
                    <div>
                        <input name="location" type="radio" onChange={handleChangeRadio}  checked={radio==="location"} />
                        <label>Location</label>
                    </div>
                    <div>
                        <input name="episode" type="radio" onChange={handleChangeRadio} checked={radio==="episode"}  />
                        <label>Episode</label>
                    </div>
                </div>
                
           </section>

           </div>
           
        </>
    )
}