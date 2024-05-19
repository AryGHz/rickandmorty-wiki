import { Link } from "react-router-dom"
import '../css/TermsAndPrivacy.css'

export default function Terms(){

    return(
        <div className="terms">
            <h1>Terms of Service for Rick and Morty Wiki</h1>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Rick and Morty Wiki (the "Site"), you agree to be bound by these Terms of Service ("ToS"). 
                If you do not agree to these terms, please do not use the Site.</p>
            <h2>2. Use of Content</h2>
            <p>All content provided on the Site is for informational and entertainment purposes only. This includes but is not limited 
                to text, images, videos, and user-generated content. The content is provided "as is" and may not always be accurate or up-to-date.</p>
            <h2>3. Intellectual Property</h2>
            <p>The content on the Site, including but not limited to the Rick and Morty name, logo, characters, and artwork, are the 
                property of their respective owners, including Adult Swim and the creators of Rick and Morty. The Site is not affiliated 
                with or endorsed by Adult Swim or the creators of Rick and Morty.</p>
            <h2>4. User Contributions</h2>
            <p>Users may contribute content to the Site, including comments, forum posts, and fan art. By submitting content, you grant 
                the Site permission to use, modify, and distribute the content for non-commercial purposes. Users are responsible for 
                ensuring that their contributions comply with applicable laws and do not infringe on the rights of third parties.</p>
            <h2>5. Conduct</h2>
            <p>Users must conduct themselves in a respectful manner when using the Site. This includes refraining from posting offensive 
                or inappropriate content, engaging in harassment or cyberbullying, or violating any applicable laws or regulations. 
                The Site reserves the right to remove any content or suspend users who violate these guidelines.</p>
            <h2>6. Privacy Policy</h2>
            <p>The Site collects and processes personal information in accordance with its Privacy Policy. By using the Site, you consent 
                to the collection, use, and disclosure of your personal information as described in the Privacy Policy.</p>
            <h2>7. Limitation of Liability</h2>
            <p>The Site is provided on an "as is" basis without warranties of any kind, express or implied. The Site shall not be liable 
                for any damages arising out of or in connection with the use of the Site, including but not limited to direct, indirect, 
                incidental, or consequential damages.</p>
            <h2>8. Changes to Terms</h2>
            <p>The Site reserves the right to modify these Terms of Service at any time without prior notice. Changes will be effective 
                immediately upon posting. Users are encouraged to review the ToS periodically for updates.</p>
            <h2>9. Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the United Mexican States, 
                without regard to its conflict of law provisions.</p>
            <h2>10. Contact Information</h2>
            <p>If you have any questions or concerns about these Terms of Service, please <Link to={'/contactform'}>contact us.</Link></p>
            
        </div>
    )
}