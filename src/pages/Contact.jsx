import Navbar from "../components/Navbar";
import { ContactForm } from "../components/ContactForm";
import '../index.css'


export default function Contact() {
    return (
        <>
            <h1>Contact</h1>

            <div className="contact-wrapper"><ContactForm/></div>
        </>
    )
}