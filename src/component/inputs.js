import React from "react";
import { InputQ } from "./input";
import { questions } from "./questions";

export function Inputs(question_nubmer, e){
    let len = questions[question_nubmer].answer_value.length
    const rendering = () => {
        const result = [];
        for(let i = 0; i<len; i++){
            result.push(<InputQ 
                a = {questions[question_nubmer].answer[i]}
                q = {question_nubmer}
                v = {questions[question_nubmer].answer_value[i]}
                e = {e}/>)
        }
    }
    return(
        <div>
            <span>{questions[question_nubmer].question}</span>
            <div>
                {rendering()}
            </div>
        </div>
    )
}