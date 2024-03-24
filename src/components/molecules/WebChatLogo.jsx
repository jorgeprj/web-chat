import React from 'react'
import Logo from '../atoms/Logo'

import { Container } from './WebChatLogo.styles'

const WebChatLogo = () => {
    return (
        <Container>
            <Logo src={'../../src/assets/logo.png'}/>
            <p>WebChat</p>
        </Container>
    )
}

export default WebChatLogo
