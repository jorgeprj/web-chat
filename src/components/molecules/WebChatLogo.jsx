import React from 'react'
import Logo from '../atoms/Logo'

import logo from '../../assets/logo.png'

import { Container } from './WebChatLogo.styles'

const WebChatLogo = () => {
    return (
        <Container>
            <Logo src={logo}/>
            <p>WebChat</p>
        </Container>
    )
}

export default WebChatLogo
