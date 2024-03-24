import React from 'react'

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

import { Chats, Container, Content, Divider } from './UsersList.styles'
import Header from '../../molecules/home/usersList/Header'
import User from '../../molecules/home/usersList/User';
import AddMore from '../../molecules/home/usersList/AddMore';

import { FaUserPlus } from 'react-icons/fa6';

const UsersList = ({ setUserChat, userChat }) => {
    const [user] = useAuthState(auth);

    const refChat = db
        .collection("chats")
        .where("users", "array-contains", user.email);
    const [chatsSnapshot] = useCollection(refChat);

    return (
        <Container>
            <Header />
            <Chats>
                {chatsSnapshot?.docs.map((item, index) => (
                    <Content key={index}>
                        <User
                            id={item.id}
                            users={item.data().users}
                            names={item.data().names}
                            user={user}
                            setUserChat={setUserChat}
                            active={userChat?.chatId === item.id ? "active" : ""}
                        />
                        <Divider />
                    </Content>
                ))}
                <AddMore icon={<FaUserPlus />} />
            </Chats>
        </Container>
    )
}

export default UsersList