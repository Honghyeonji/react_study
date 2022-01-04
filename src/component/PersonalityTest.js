import React from 'react';
import { questions } from "./questions";
import { useSelector, useDispatch } from 'react-redux';
import { AnswerList } from './AnswerList';
import { result } from '../store/modules/test';
import { results } from './results';

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
    let resultText = "";
    if ( result >= 60) {
        resultText = results[0].result
    }else if (result > 51) {
        resultText = results[1].result
    }else if (result > 41) {
        resultText = results[2].result
    }else if (result > 31) {
        resultText = results[3].result
    }else if (result > 21) {
        resultText = results[4].result
    }else {
        resultText = results[5].result
    }
    if(result === -1){
        return(
        <div></div>
        )
    }else{
        return(
            <div>
                <span>score: {result}</span>
                <div> {resultText} </div>
            </div>
        
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
