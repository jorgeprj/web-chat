import React, { useEffect, useState } from 'react';

import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../../services/firebase";

import { MdPerson } from "react-icons/md";
import Avatar from '../../../atoms/Avatar';

import { Container, LastMessage, Name } from './User.styles';

const getUserEmail = (users, userLogged) =>
	users?.filter((user) => user !== userLogged?.email)[0];

const getUserName = (names, userLogged) =>
	names?.filter((name) => name !== userLogged?.displayName)[0];

const User = ({ id, users, names, user, setUserChat, active }) => {
	const [lastMessage, setLastMessage] = useState(null);

    useEffect(() => {
		const unsubscribe = db
			.collection("chats")
			.doc(id)
			.collection("messages")
			.orderBy("timestamp", "desc")
            .limit(1)
            .onSnapshot(snapshot => {
                if (!snapshot.empty) {
                    const lastMessageData = snapshot.docs[0].data();
                    setLastMessage(lastMessageData);
                } else {
                    setLastMessage(null); 
                }
            });

        return () => unsubscribe();
    }, [id]);

    const [getUserItem] = useCollection(
		db.collection("users").where("email", "==", getUserEmail(users, user))
	);

	const profile = getUserItem?.docs?.[0]?.data();

	const handleNewChat = () => {
		const userChat = {
			chatId: id,
			name: getUserName(names, user),
			email: getUserEmail(users, user),
			photoURL: profile?.photoURL,
		};
		setUserChat(userChat);
	};

    return (
		<Container onClick={handleNewChat} className={active}>
			{profile ? <Avatar src={profile?.photoURL} /> : <MdPerson />}
			<div>
				<Name>{getUserName(names, user)}</Name>
				{lastMessage && <LastMessage>{lastMessage?.message}</LastMessage>}
			</div>
		</Container>
    );
};

export default User;