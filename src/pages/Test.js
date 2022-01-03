import React from "react";
import { PersonalityTest } from "../component/PersonalityTest";
import { TestName } from "../component/TestName";

function Test(){
    return<>
        <TestName name={"심리테스트"}/>
        <PersonalityTest />
    </>
}

export default Test;