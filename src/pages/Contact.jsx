import Navbar from "../components/Navbar";
import { ContactForm } from "../components/ContactForm";
import '../index.css'
import '../styles/Contact.css'

export default function Contact() {
    return (
        <>
            <div className="container section-padding">

                <h1>Contact</h1>
                <div className="contact-wrapper"><ContactForm/></div>

            </div>
            
        </>
    )
}