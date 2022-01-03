import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/modules/test";

export function Answer({props}) {
    const dispatch = useDispatch();
    const v = useSelector(state => state.test.inputs)
    const changeEvent = (e) => {
        const {name, value} = e.target;
        dispatch(update({name, value}));
        console.log(v);
        console.log(name);
        console.log(value);
    }

    const questionAnswer = props && props.answer.map((a, index) => (
        <div key={index}>
            <input 
            name = {props.id}
            value= {props.answer_value[index]}
            type = "radio" 
            // onChange = {TestActions.update(props.id, props.answer_value[index])}
            onChange={(e) => changeEvent(e)}
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