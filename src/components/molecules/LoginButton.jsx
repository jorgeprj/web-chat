import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    border-radius: 6px;
    padding: 12px 16px;
    gap: 16px;
    margin-top: 24px;
    outline: none;
    cursor: pointer;
    border: none;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }

    & svg{
        font-size: 24px;
    }

    & p{
        font-size: 18px;
        font-weight: 700;
    }
`


const LoginButton = ({children, onClick}) => {
    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    )
}

export default LoginButton