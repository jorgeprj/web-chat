import React from 'react'

import LogoSection from '../../organisms/login/LogoSection'
import AuthSection from '../../organisms/login/AuthSection'

import { Container } from './Login.styles'

const Login = () => {
    return (
        <Container>
            <LogoSection/>
            <AuthSection/>
        </Container>
    )
}

export default Login