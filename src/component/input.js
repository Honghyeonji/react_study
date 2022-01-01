import React from "react";

export function InputQ({answer, answer_number, value, onUpdate}){
    return(
        <div>
            <input
                name = {answer_number}
                type = "radio"
                value = {value}
                onChange = {onUpdate(answer_number, value)}>
                {answer}
            </input>
            <br/>
        </div>
    )
}