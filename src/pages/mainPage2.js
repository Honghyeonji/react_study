import React from 'react';
import styled from 'styled-components';
import Header from '../component/common/Header';
import Footer from '../component/common/Footer';
import Category from '../component/mainPage/Category';
import { recommendTest, hotTest } from '../component/mainPage/TestTag';



export default function MainPage() {
    return (
        <Wrap>
            <Header />
            <Body>
                <Category props = {recommendTest}/>
                <Category props = {hotTest}/>
            </Body>
            <Footer />
        </Wrap>
    )
}

const Wrap = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Body = styled.div`
    width: 100%;
    max-width: 1048px;
    display: flex;
    flex-direction: column;
    align-items: center;
`