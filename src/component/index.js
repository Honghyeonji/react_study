import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux' ;

const test = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const resultScore = 0;
const resultType = 0;

function reducer(state = test, action) {
    return state;
}

let store = createStore(reducer)
ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <App />
        </Provider>
    </React.StrictMode>
)

// state = {
//     test : [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     resultScore : 0,
//     resultType : 0
//   }