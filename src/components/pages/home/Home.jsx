import React from 'react'

import { Container, Content, HeaderArea } from './Home.styled'

import Header from '../../organisms/home/Header'
import Sidebar from '../../organisms/home/Sidebar'
import UsersList from '../../organisms/home/UsersList'
import Chat from '../../organisms/home/Chat'

const Home = ({ setUserChat, userChat }) => {
    return (
        <Container>
            <HeaderArea/>
            <Header setUserChat={setUserChat}/>
            <Content>
                <Sidebar/>
                <UsersList setUserChat={setUserChat} userChat={userChat}/>
                <Chat userChat={userChat}/>
            </Content>
        </Container>
    )
}

export default Home