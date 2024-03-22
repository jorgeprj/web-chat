import React from 'react'
import styled from 'styled-components'

import { auth, provider } from '../../services/firebase'

import { FaGoogle } from 'react-icons/fa6'
import { H2, P } from '../atoms/Typography'
import LoginButton from '../molecules/LoginButton'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 128px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 8px;
`

const LoginCard = () => {
	const handleSignin = () => {
		auth.signInWithPopup(provider).catch(alert);
	};

    return (
        <Container>
            <Card>
                <H2>Login</H2>
                <P>Bem-vindo ao chat do PET-BCC</P>
                <LoginButton onClick={handleSignin}>
                    <FaGoogle/>
                    <p>Google</p>
                </LoginButton>
            </Card>
        </Container>
    )
}

export default LoginCard