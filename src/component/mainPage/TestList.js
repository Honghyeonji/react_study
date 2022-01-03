import React from 'react';
import styled from 'styled-components';
import Test from './Test';

export default function TestList(props) {
    return (
        <Tests>
            <Test props = {props[0]}/>
            <Test props = {props[1]}/>
            <Test props = {props[2]}/>
            <Test props = {props[3]}/>
        </Tests>
    )
}

const Tests = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
