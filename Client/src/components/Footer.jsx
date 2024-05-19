import '../css/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer(){


    return(
        <footer className='footer'>
            <section className='footer-section1'>
                <div className='footer-section1-logo' >
                    <Link to={'/'}><h1 > Rick and Morty Wiki</h1></Link>
                </div>
                <div className='footer-section1-links'>
                    <Link to={'https://www.adultswim.com/streams/rick-and-morty'} target='blank'>WATCH EPISODES</Link>
                    <Link to={'https://wbshop.com/collections/rick-and-morty'} target='blank'>MERCHANDISE</Link>
                    <Link to={'/contactform'}>CONTACT US</Link>
                </div>

                {/* <Link to={'/'}><h1> Rick and Morty Wiki</h1></Link>
                <Link to={'https://www.adultswim.com/streams/rick-and-morty'} target='blank'>WATCH EPISODES</Link>
                    <Link to={'https://wbshop.com/collections/rick-and-morty'} target='blank'>MERCHANDISE</Link>
                    <Link to={'/contactform'}>CONTACT US</Link> */}
            </section>
            <section className='footer-section2'>
            <Link to={'/terms'}>Terms of Use</Link>
            <Link to={'/privacy'}>Privacy Policy</Link>
            </section>
            <section className='footer-section3'>
                <h1> © 2024 AryGHz. All Rights Reserved.</h1>
            </section>
           
            
        </footer>
    )
}