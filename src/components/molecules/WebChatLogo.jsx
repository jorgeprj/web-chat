import React from 'react'
import Logo from '../atoms/Logo'
import { P } from '../atoms/Typography'
import { Container } from './WebChatLogo.styles'


const WebChatLogo = () => {
    return (
        <Container>
            <Logo src={'../src/assets/logo.png'}/>
            <P>WebChat</P>
        </Container>
    )
}

export default WebChatLogo
