// 모듈의 내용을 저장하는 파일입니다.

import { createAction, handleActions } from "redux-actions";

const UPDATE = 'test/UPDATE';
const RESULT = 'test/RESULT';

// 함수의 액션 타입을 지정합니다.
export const update = createAction(UPDATE, index=>index, value=>value);
export const result = createAction(RESULT);

// 일단 테스트용으로 심리테스트 하나만 사용
// 기본 state 구성입니다.
const initialSate = {
    result_score: -1,
    inputs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

// 액션 타입에 따른 함수의 동작
export default handleActions({
    [UPDATE] : (state, action) => {
        return { inputs: [...state.inputs.slice(0, action.index), parseInt(action.value), ...state.inputs.slice(action.index+1, 11)]}
    },
    [RESULT] : (state) => {
        let n = 0;
        for(let i = 0; i < 11; i++){
            n += state.inputs[i];
        }
        return { result_score: n};
    }
}, initialSate);