import Accordion from "../components/Accordion";
import { FcLibrary } from "react-icons/fc";

export default function FAQ() {
    return (
        <div>
            <div className="faq=hero">
                <h1>Frequently Asked Questions <FcLibrary /></h1>
            </div>
            
            <Accordion/>
        </div>
    )
}