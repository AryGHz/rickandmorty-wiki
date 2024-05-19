import React from "react";
import '../css/About.css'
import banner from '../css/images/rickandmorty-banner.jpg'
import icon from '../css/images/rick-icon.png'

export default function About(){
    return(
        <div className="about">
            <h1>ABOUT RICK AND MORTY WIKI</h1>
            <img src={banner} alt="banner"></img>
            <div>
            <p>At the heart of our website is our use of an API (Application Programming Interface), which allows 
                us to access and integrate dynamic content from various sources, enriching your experience with 
                up-to-date information, character profiles, episode guides, and much more. Through this API, we 
                aim to provide you with the most comprehensive and accurate insights into the multiverse of Rick and Morty.
            </p>
            <p>
                Whether you're a seasoned fan or just getting started on your Rick and Morty journey, our website is 
                here to serve as your ultimate companion. Explore character backstories, dive deep into episode analyses, 
                discover hidden Easter eggs, and join our vibrant community of fellow enthusiasts.
            </p>
            <p>
                We have more than 800 characters in our database, 126 locations and all the episodes from season 1 to the last season!
            </p>
            <p>
            Thank you for being a part of our fan community, and we hope you enjoy your time exploring the wonders of Rick and Morty with us!
            </p>
            <img src={icon} alt="icon"></img>
            <p>
            Wubba lubba dub dub!"
            </p>
            </div>
        </div>
    )
}