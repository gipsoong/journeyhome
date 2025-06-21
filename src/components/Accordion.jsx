import { useEffect, useState } from "react";
import "../styles/Contact.css"


const data = [
    {
        question: 'What does this calculator do?',
        answer: 'This calculator helps you estimate your monthly HDB loan repayments based on your flat price, downpayment, loan tenure, and interest rate.'
    },

    {
        question: 'Is this calculator accurate for CPF Housing Grants and HDB loan eligibility?',
        answer: 'No, this calculator provides an estimate only. For CPF grants or HDB loan eligibility, please refer to official HDB tools or consult with HDB officers.'
    },

    {
        question: 'Can I include my CPF savings in the calculation?',
        answer: 'Yes. You can enter how much CPF you plan to use as part of your downpayment to see how it affects your loan and monthly repayment.'
    },

    {
        question: 'Does this calculator support bank loans as well?',
        answer: 'Currently, the calculator is designed for HDB concessionary loans. Support for bank loans may be added in the future.'
    },

    {
        question: 'Will this calculator store or share my information?',
        answer: 'No. This tool runs entirely in your browser and does not collect, store, or share any personal data.'
    }
]

export default function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className="accordion-parent">
            <div className="accordion">
                {data.map((item, i) => (

                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-' : '+ '}</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                    </div>

                ))}
            </div>
        </div>
    )

}