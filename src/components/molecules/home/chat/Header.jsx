import React from 'react'

import { FaEllipsisVertical, FaPhone } from 'react-icons/fa6'
import Avatar from '../../../atoms/Avatar'

import { Container, Icons, TextInfo, UserInfo } from './Header.styles'

const Header = ({ userChat }) => {
    return (
        <Container>
            <UserInfo>
                <Avatar src={userChat.photoURL} />
                <TextInfo>
                    <h4>{userChat.name}</h4>
                    <p>{userChat.email}</p>
                </TextInfo>
            </UserInfo>
            <Icons>
                <FaPhone />
                <FaEllipsisVertical />
            </Icons>
        </Container>
    )
}

export default Header