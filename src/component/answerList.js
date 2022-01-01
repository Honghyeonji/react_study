import React from "react";
import { TestActions } from "../store/actionCreators";

export default function answerList(props, onUpdate) {
    
    const questionAnswer = props.answer.map((answer, index) => (
            <div>
                <input 
                name = {props.id}
                value= {props.answer_value[index]}
                type = "radio" 
                onChange = {TestActions.update(props.id, props.answer_value[index])}
                />
                {props.answer[index]}
            </div>
    ));
    return (
        <div>
            {questionAnswer}
        </div>
    );
}