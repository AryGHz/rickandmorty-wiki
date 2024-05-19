import { Link } from "react-router-dom";
import '../css/Help.css'
export default function Help () {
    return (
        <div  className="help">
            <h1>Help</h1>
                <h2>How to Use the Website?</h2>
                    <h3>Explore Content:</h3>
                        <p>👽Use the search bar to find the information you need, remember to chose with the radio buttons what kind of data you need</p>
                        <p>👽we have 3 different ways to search information: by character, location or episode</p>
                    <h3>Add Favorites:</h3>
                        <p>👽Use the heart button to add characters, places or episodes.</p>
                        <p>👽You can always visit your favorite characters on the Favorites page, and remove and add new favorites at anytime</p>
                    <h3>Do i need an account to use the page?</h3>
                        <p>👽in order to provide you a better experience, we encorage you to create an account to use our API, it's free!</p>
                <h2>Technical Issues and Solutions</h2>
                    <h3>Access Issues:</h3>
                    <p>👽If you are having trouble accessing the site, make sure you have a stable internet connection.</p>
                    <p>👽If the probelm persist,try clearing your browser cache or using a different web browser.</p>
            <h3>When i login, it appears a message: Invalid Email or Invalid password</h3>
            <p>👽Make sure the email is the same you used to register.</p>
            <p>👽If you don't remember the password you can use the forgot passsword link to change it</p>
            <h3>When i navigate to the reset password page and submit, it appears a message: The link has expired</h3>
            <p>👽The link is only avaliable for the next 24 hours after you request a password reset.</p>
            <p>👽Remember to click on the link you received in your inbox to reset your password. Each link is unique and you won't be able to reset your password from another one</p>
            <h3>Technical Support</h3>
            <p>👽If you experience persistent technical issues or have questions about how the site works, please <Link to={'/contactform'}>contact our support team</Link></p>

        </div>  
    );
}


