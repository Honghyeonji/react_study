import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SocialButtonGroup from '../Kakao';

export default function TestList({props}) {
    const img = props.img ? true : null;

    return (
        <div>
            <Link to={"/"+props.route} style={{textDecoration:'none', color:'inherit'}}>
                <Test>
                    <TestImg>
                        <TestName>{props.testName}</TestName>
                    </TestImg>
                </Test>
            </Link>
            <SocialButtonGroup link={props.route}/>
        </div>
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