import React, {useState} from "react";
import FormInputGroup from "./formInputGroup";
import { CiBadgeDollar } from "react-icons/ci";


function Form() {
    const [homeValue, setHomeValue] = useState("");
    const [downPayment, setDownPayment] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanDuration, setLoanDuration] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    function calculateLoanAmount() {
        setLoanAmount(homeValue - downPayment);
        return loanAmount;
    }
    
    function calculateMonthlyPayment() {
        function percentagetoDecimal(percent){
            return percent / 12 / 100 ;
        }

        function yearsToMonths(year){
            return year * 12;
        }

        setMonthlyPayment(
            (percentagetoDecimal(interestRate * loanAmount)/ (1-Math.pow(1+percentagetoDecimal(interestRate), -yearsToMonths(loanDuration))))
        );
        
        console.log(monthlyPayment)
        return monthlyPayment;

    }
  
    
    return (
        <form onSubmit={(e)=> e.preventDefault()}>
            <FormInputGroup 
                text="Home Value" 
                icon={<CiBadgeDollar />}
                placeholder={"Enter the value of the flat"}
                onKeyUp={calculateLoanAmount}
                value={homeValue}
                onInput={(e) => setHomeValue(e.target.value)}
            />
            <FormInputGroup 
                text="Down Payment" 
                icon={<CiBadgeDollar />}
                placeholder={"Enter your funds"}
                onKeyUp={calculateLoanAmount}
                value={downPayment}
                onInput={(e) => setDownPayment(e.target.value)}
            />
            <FormInputGroup 
                text="Interest Rate %" 
                placeholder={"Enter your interest rate"}
                value={interestRate}
                onInput={(e) => setInterestRate(e.target.value)}
            />
            <FormInputGroup 
                text="Loan Duration (Years)" 
                placeholder={"Enter the duration of your loan in years"}
                value={loanDuration}
                onInput={(e) => setLoanDuration(e.target.value)}
            />
            <FormInputGroup 
                text="Loan Amount" 
                icon={<CiBadgeDollar />}
                placeholder={"Funds needed"}
                readOnly={true}
                value={loanAmount}
            />

            <h4 className="alert alert-info fw-bold">
                Monthly payment: 
                {parseFloat(monthlyPayment.toFixed(2))}</h4>
            <button 
                type="submit" 
                className="btn btn-primary btn-lg w-100 center" 
                onClick={calculateMonthlyPayment}>
                    Calculate
            </button>
        </form>
    )
}

export default Form;