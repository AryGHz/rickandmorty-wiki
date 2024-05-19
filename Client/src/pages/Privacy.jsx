import { Link } from "react-router-dom"
import '../css/TermsAndPrivacy.css'

export default function Privacy(){

    return(
        <div className="terms">
            <h1>Privacy Policy for Rick and Morty Wiki</h1>
            
            <p>This Privacy Policy describes how information is collected, used, and shared when you visit or interact 
                with the Rick and Morty Wiki (the "Site").</p>
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, such as when you register for an account, 
                participate in surveys or contests, or contact us with inquiries.</p>
            <p>Additionally, we may automatically collect certain information about your device, including your IP address, 
                browser type, and operating system, as well as information about your usage of the Site, such as the pages 
                you visit and the actions you take.</p>
            <h2>2. Use of Information</h2>
            <p>We may use the information collected to:

                Provide and maintain the Site;
                Communicate with you, including responding to inquiries and sending updates or notifications;
                Personalize your experience on the Site;
                Analyze usage of the Site and improve our content and services; and
                Detect, prevent, and address technical issues or potential fraud.</p>

            <h2>3. Cookies and Similar Technologies</h2>
            <p>The Site may use cookies and similar technologies to collect information and enhance your experience. 
                You can set your browser to refuse cookies or to alert you when cookies are being sent, but some features 
                of the Site may not function properly without cookies.</p>
            <h2>4. Third-Party Links</h2>
            <p>The Site may contain links to third-party websites or services that are not owned or controlled by us. 
                We are not responsible for the privacy practices or content of these third-party sites and encourage 
                you to review their privacy policies.</p>
            <h2>5. Changes to Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We encourage you to review this Privacy Policy periodically for any updates.</p>
            <h2>10. Contact Information</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our practices, please <Link to={'/contactform'}>contact us.</Link></p>
            
        </div>
    )
}