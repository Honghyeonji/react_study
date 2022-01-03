import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/mainPage2";
import Test from "./pages/Test";
import SocialButtonGroup from "./component/Kakao";

function App(){
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/test' component={Test} />
                    <Route exact path = '/' component = {MainPage}/>
                    <Route path= '/kakao' component={SocialButtonGroup} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;