import React from "react";

function FormInputGroup({text, icon, placeholder, value, onInput, onKeyUp, readOnly=false}) {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text">
                {text}
                {icon}
            </span>
            <input 
                className="form-control"
                type="number" 
                placeholder={placeholder} 
                value={value}
                onInput={onInput}
                onKeyUp={onKeyUp}
                readOnly={readOnly}
            />
        </div>
    )
}

export default FormInputGroup;