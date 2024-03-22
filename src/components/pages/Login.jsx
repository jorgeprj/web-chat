import React from 'react'
import styled from 'styled-components'

import Logo from '../atoms/Logo'
import LoginCard from '../organisms/LoginCard'
import LoginFooter from '../organisms/LoginFooter'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 24px;

`

const Login = () => {
    return (
        <Container>
            <Logo src={`./logo.png`} />
            <LoginCard />
            <LoginFooter/>
        </Container>
    )
}

export default Login