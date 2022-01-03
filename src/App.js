import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Test from "./pages/Test";

function App(){
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Test} />
                    <Route path = '/main' component = {MainPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;