import React from "react";

export function InputQ(a, q, v, e){
    return(
        <input
            name = {q}
            type = "radio"
            value = {v}
            onChange = {e}
        >{a}</input>
    )
}