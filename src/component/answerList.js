import React from "react";
// import { TestActions } from "../store/actionCreators";

export default function answerList(props) {
    const questionAnswer = props && props.answer.map((a, index) => (
        <div>
            <input 
            name = {props.id}
            value= {props.answer_value[index]}
            type = "radio" 
            // onChange = {TestActions.update(props.id, props.answer_value[index])}
            // onChange = {onUpdate(props.id, props.answer_value[index])}
            />
            {a}
        </div>
    ));
    return (
        <div>
            {questionAnswer}
        </div>
    );
}