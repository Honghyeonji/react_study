import React from 'react';
import styled from 'styled-components';

export default function TestList(props) {
    const img = props.img ? true : null;

    return (
        <Test>
            <TestImg>

            </TestImg>
            <TestName>{props.testName}</TestName>
        </Test>
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

const TestName = styled.h1`
    margin : 0;
`