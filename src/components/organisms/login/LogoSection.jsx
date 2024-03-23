import React from 'react'
import { Container, Content, LogoContent } from './LogoSection.styles'
import Logo from '../../atoms/Logo'
import { H2 } from '../../atoms/Typography'
import LoginFooter from '../../molecules/login/LoginFooter'

const LogoSection = () => {
    return (
        <Container>
            <Content>
                <LogoContent>
                    <Logo src={"../../src/assets/logo.png"} />
                    <H2>Web Chat</H2>
                </LogoContent>
                <p>Bem-vindo ao chat do PET-BCC UFSCar</p>
            </Content>
            <LoginFooter/>
        </Container>
    )
}

export default LogoSection