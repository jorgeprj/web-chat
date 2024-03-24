import React from 'react'

import { Container, Content } from './LogoSection.styles'

import LoginFooter from '../../molecules/login/LoginFooter'
import WebChatLogo from '../../molecules/WebChatLogo'

const LogoSection = () => {
    return (
        <Container>
            <Content>
            <WebChatLogo/>
                <p>Bem-vindo ao chat do PET-BCC UFSCar</p>
            </Content>
            <LoginFooter/>
        </Container>
    )
}

export default LogoSection