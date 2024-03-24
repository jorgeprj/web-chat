import React from 'react'

import { auth, provider } from '../../../services/firebase'

import { Container, Content, Text } from './AuthSection.styles'

import AuthButton from '../../molecules/login/AuthButton'


const AuthSection = () => {
	const handleSignin = () => {
		auth.signInWithPopup(provider).catch(alert);
	};

    return (
        <Container>
            <Content>
                <Text>
                    <h2>Faça o login na sua conta</h2>
                    <p>Ao fazer o login, você aceitas os <a href="#">Termos de Serviços</a></p>
                </Text>
                <AuthButton type="Google" onClick={handleSignin} />
            </Content>
        </Container>
    )
}

export default AuthSection