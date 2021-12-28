import React from 'react';
import { Provider } from 'react';
import store from './store';

import App from './component/App';
import TestName from 'testName';

const Root = () => {
    return(
        <Provider store = {store}>
            <TestName name={"심리테스트"}/>
            <App />
        </Provider>
    )
}

export default Root;