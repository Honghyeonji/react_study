const SET_SCORE = 'counter/SET_SCORE'

export const setScore = (score, num) => ({type : SET_SCORE, score,num});

const initialState = {
    test : [0, 0, 0, 0, 0, 0, 0, 0, 0],
    questionNum : 0,
    questionScore : 0,
    resultScore : 0,
    // resultType : 0
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case SET_SCORE :
            return {
                ...state,
                test : action.test,
                // resultScore : 
            };
    }
}