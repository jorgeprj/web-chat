import React from 'react'

import { Container } from './Header.styles'

import WebChatLogo from '../../molecules/WebChatLogo'
import SearchBar from '../../molecules/home/header/SearchBar'
import UserInfo from '../../molecules/home/header/UserInfo'

const Header = ({ setUserChat }) => {
    return (
        <Container>
            <WebChatLogo/>
            <SearchBar/>
            <UserInfo setUserChat={setUserChat} />
        </Container>
    )
}

export default Header