import React from "react";
import FormInputGroup from "./FormInputGroup";
import { CiBadgeDollar } from "react-icons/ci";


function Form() {
    return (
        <form onSubmit={(e)=> e.preventDefault()}>
            <FormInputGroup text="Home Value" icon={<CiBadgeDollar />}/>
            <button 
                type="submit" 
                className="btn btn-primary btn-lg w-100 center" 
                onClick={() => console.log("Click")}>
                    Calculate
            </button>
        </form>
    )
}

export default Form;