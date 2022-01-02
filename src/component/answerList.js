import React from "react";
import { Answer } from "./Answer";

export function AnswerList({ques}){
    return(
        <div>
            <span>{ques.question}</span>
            <Answer props = {ques}/>
        </div>
    )
}