import React from 'react'
import Switch from '../../../atoms/buttons/Switch'
import { Container } from './Header.styles'

const Header = () => {
    return (
        <Container>
            <Switch />
            <p>Não Lidas</p>
        </Container>
    )
}

export default Header