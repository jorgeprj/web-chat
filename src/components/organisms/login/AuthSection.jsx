import React from 'react'

import { auth, provider } from '../../../services/firebase'

import { Container, Content, Text } from './AuthSection.styles'

import { H2, P } from '../../atoms/Typography'
import AuthButton from '../../molecules/login/AuthButton'


const AuthSection = () => {
	const handleSignin = () => {
		auth.signInWithPopup(provider).catch(alert);
	};

    return (
        <Container>
            <Content>
                <Text>
                    <H2>Faça o login na sua conta</H2>
                    <P>Ao fazer o login, você aceitas os <a href="#">Termos de Serviços</a></P>
                </Text>
                <AuthButton type="Google" onClick={handleSignin} />
            </Content>
        </Container>
    )
}

export default AuthSection