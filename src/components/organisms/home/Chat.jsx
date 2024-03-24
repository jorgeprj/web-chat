import React from 'react';

import { Container, Content, Default, Info, Title } from './Chat.styles';

import Logo from '../../atoms/Logo';
import Header from '../../molecules/home/chat/Header';
import Footer from '../../molecules/home/chat/Footer';
import Body from '../../molecules/home/chat/Body';

const Chat = ({ userChat }) => {
    if (!userChat) {
        return (
            <Default>
                <Logo src={'../../src/assets/logo_pet.png'} />
                <Title>WebChat PET-BCC</Title>
                <Info>
                    Agora você tem um canal exclusivo para se comunicar com os membros do PET-BCC!
                </Info>
            </Default>
        );
    }

    return (
        <Container>
            <Header userChat={userChat} />
            <Content>
                <Body chatId={userChat?.chatId} />
                <Footer chatId={userChat?.chatId} />
            </Content>
        </Container>
    );
};

export default Chat;