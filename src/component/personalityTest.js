import React from 'react';
import { questions } from "./questions";
import { useSelector, useDispatch } from 'react-redux';
import { AnswerList } from './AnswerList';
import { result } from '../store/modules/test';


function Test() {
    return(
        <div>
            {questions && questions.map((ques, index) => (
                <div key = {index}>
                    <AnswerList ques = {ques} />
                </div>
            ))}
            <br/>
        </div>
    )
}

function Result_score(){
    const result = useSelector(state => state.test.result_score);
    if(result === -1){
        return(
        <div></div>
        )
    }else{
        return(
        <span>score: {result}</span>
        )
    }
}

export function PersonalityTest(){
    const dispatch = useDispatch();
    const resultClick = () => {
        dispatch(result());
    }
    return(
        <div>
            <Test />
            <button onClick={resultClick}>결과 확인</button>
            <Result_score />
        </div>
    )
}