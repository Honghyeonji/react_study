import React from 'react';
import styled from 'styled-components';

export default function Header(props) {

    return(
        <Box>
            <HeaderInner>
                <Logo>
                    홍홍테스트
                </Logo>
                <Button>
                    로그인
                </Button>
            </HeaderInner>
        </Box>
    )
}

const Box = styled.div`    
    display: flex;
    justify-content: center;
    width: 100%;
    height: 79px;
    border-bottom: 1px solid black;
`

const HeaderInner = styled.div`    
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1048px;
`

const Logo = styled.h1`

`

const Button = styled.button`

`