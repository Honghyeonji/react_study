import React, { Fragment } from 'react';
import styled from 'styled-components';
import TestList from './TestList';

export default function Category(props) {
    return (
        <Fragment>
            <TestTag>
                {props.title}
            </TestTag>
            <TestList props = {props.list}/>
        </Fragment>
    )
}

const TestTag = styled.h1`
    align-self: flex-start;
`