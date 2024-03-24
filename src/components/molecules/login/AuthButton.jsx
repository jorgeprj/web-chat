import React from 'react'

import { Container, Text } from './AuthButton.styles'

import AuthIcon from '../../atoms/icons/AuthIcon'

const AuthButton = ({ type, onClick }) => {
    return (
        <Container onClick={onClick}>
            <AuthIcon type={type}/>
            <Text>{type}</Text>
        </Container>
    )
}

export default AuthButton