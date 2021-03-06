import React, { Component } from "react";
import PersonalityTest from "./PersonalityTest";
import { results } from "./results"

export class Result extends PersonalityTest{
    constructor(){
        super();
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.resultType == 0) return false;
        else return true;
    }

    render(){
        return(
            <div>
                {results[this.props.resultType-1].score}
                <br/>
                {results[this.props.resultType-1].score}
            </div>
        )
    }
}