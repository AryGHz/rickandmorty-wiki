import { Link, useLocation } from "react-router-dom"
import '../css/Modal.css'
import closeIcon from '../css/images/close.png'
import modalImage from '../css/images/rick-icon.png'

export  const Modal = ({message, isActive, closeModal})=>{

    const location = useLocation();

    if(isActive === false){return null}

    return(
        <>
            <div className="modal">
                <section className="modal-section1">
                <img alt="close-icon" src={closeIcon} onClick={closeModal}/>
                </section>
                <section className="modal-section2">
                    <h1>{message}</h1>
                    <img alt="rick-image" src={modalImage} />
                </section>
                
                {
                    location.pathname === '/' &&
                    <section className="modal-section3">
                    <Link to={'/login'}>
                        Login
                    </Link>
                    <Link to={'/register'}>
                        Create Account
                    </Link>
                    </section>
                }

                {
                    location.pathname != '/' && 
                    <section className="modal-section3">
                    <button onClick={closeModal}>
                        OK
                    </button>
                    </section>
                }

                
                
            </div>
        </>
    )
}