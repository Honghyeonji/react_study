import React from "react";
import { InputQ } from "./input";
import { questions } from "./questions";

export function Inputs({ques, e, q_n}){
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
            a = {ques.answer[i]}
            q = {q_n}
            v = {ques.answer_value[i]}
            e = {e}/>)
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