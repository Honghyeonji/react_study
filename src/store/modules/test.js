import { createAction, handleActions } from "redux-actions";

const UPDATE = 'test/UPDATE';
const RESULT = 'test/RESULT';

export const update = createAction(UPDATE, index=>index, value=>value);
export const result = createAction(RESULT);

// 일단 테스트용으로 심리테스트 하나만 사용
const initialSate = {
    result: 0,
    inputs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

export default handleActions({
    [UPDATE] : (state, action) => {
        return { inputs: [...state.inputs.slice(0, action.index), parseInt(action.value), ...state.inputs.slice(action.index+1, 11)]}
    },
    [RESULT] : (state) => {
        return { result: state.inputs(function add(sum, currValue) {return sum + currValue; }, 0)};
    }
}, initialSate);