import React from "react";

export function InputQ({a, q, v, e}){
    return(
        <div>
            <input
                name = {q}
                type = "radio"
                value = {v}
                onChange = {e}>
                {a}
            </input>
            <br/>
        </div>
    )
}