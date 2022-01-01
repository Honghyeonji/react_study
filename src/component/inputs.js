import React from "react";
import { InputQ } from "./input";
import { questions } from "./questions";

export function Inputs({ques, onUpdate}){
    var len = 0;
    if(ques !== 'undefinded' && ques !== null){
        len = ques.answer.length;
    }
    console.log(ques.question + len);
    // const answers = ques && ques.answer.map((a) => a)
    // const answer_values = ques && ques.answer_value.map((v) => v)
    // const len = answers.length;
    const result = [];

    for(let i = 0; i<len; i++){
        result.concat(<InputQ 
            answer = {ques.answer[i]}
            answer_number = {i}
            value = {ques.answer_value[i]}
            onUpdate = {onUpdate}/>)
    }
    return(
        <div>
            <span>{ques.question}</span>
            <div>
                {result}
            </div>
        </div>
    )
}