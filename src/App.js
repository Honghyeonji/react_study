import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/mainPage2";
import Test from "./pages/Test";

function App(){
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/test' component={Test} />
                    <Route exact path = '/' component = {MainPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;