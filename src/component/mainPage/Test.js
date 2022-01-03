import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function TestList({props}) {
    const img = props.img ? true : null;

    return (
        <Link to={props.route} style={{textDecoration:'none', color:'inherit'}}>
            <Test>
                <TestImg>

                </TestImg>
                <TestName>{props.testName}</TestName>
            </Test>
        </Link>
    )
}

const Test = styled.div`
    display: flex;
    flex-direction: column;
`
const TestImg = styled.div`
    width : 200px;
    height: 300px;
    background-color: #c4c4c4;
`

const TestName = styled.h2`
    margin : 0;
`