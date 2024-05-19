import '../css/LandingPage.css'
import landingImage from '../css/images/rickandmorty-landing2.jpg'
import { getMainCharacters } from '../routes/axiosConfig';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/authProvider';


export default function LandingPage (){
    
    const{sessionData} = useAuthContext()

    const [characters, setCharacters]= useState([]);

    const getChars = async ()=>{
        const data = await getMainCharacters();
        setCharacters(data)
    }

    useEffect(()=>{
        getChars()
    },[])

    return(
        <>  
            <div className='landing'>
                <h1> Rick and Morty Wiki</h1>
                
                
                <img alt='rick and morty wallpaper' src={landingImage}  />

            <section>
                <p>Welcome to the ultimate portal for all things Rick and Morty! 
                    Dive into the multidimensional madness of this beloved animated series with our comprehensive wiki. 
                    Whether you're a seasoned fan or just discovering the zany adventures of Rick Sanchez and his 
                    grandson Morty Smith, you'll find everything you need right here.
                </p>
                <p>
                    Explore character profiles, dissect mind-bending episodes, discover new locations, and join our vibrant community of fellow fans. 
                </p>

                <p>
                    Want to take your Rick and Morty fandom to the next level? Register now to unlock exclusive features 
                    and join our growing community of enthusiasts!
                    By registering, you'll gain access to personalized profiles, save your favorite characters, locations 
                    or episodes, and use our powerful database!
                </p>
                
            </section>
            <h2>- About Rick and Morty -</h2>
            <section>
                <p>
                    Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland 
                    and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. 
                </p>
                <p>
                    The series follows 
                    the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful 
                    grandson Morty Smith, who split their time between domestic life and interdimensional adventures 
                    that take place across an infinite number of realities, often traveling to other planets and 
                    dimensions through portals and on Rick's flying saucer.
                </p>
                <p>
                    The series premiered on December 2, 2013, on Cartoon Network's late-night programming block Adult Swim.
                    As of December 17, 2023, 71 episodes of Rick and Morty have aired, concluding the seventh season.
                    There is a long-term deal with the creators and Adult Swim, with the possibility of extending it
                    for up to 10 seasons.
                </p>
                
            </section>
            <h2>- Main Characters -</h2>
            <div className='cards-landing'>
            {
                characters.map((card)=>{
                    
                    return(
                        <div key={card.id} className='card-landing'>
                            <img src={card.image}/>
                            <h2>{card.name}</h2>
                        </div>
                    )
                })}
            </div>
            {
                !sessionData.username &&
            <div className='links'>
                <h2>- Are you New? -</h2>
                <div>
                <p>Don't miss out on the fun. Join the Rick and Morty fandom for free! <Link to={'/register'}> Register now</Link> </p>
                </div>
                <div>
                <Link to={'/login'}>I'm already a member</Link>
                </div>  
            </div>
            }
            </div>
            
        </>
    )
}