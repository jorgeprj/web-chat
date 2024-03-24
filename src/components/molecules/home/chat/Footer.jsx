import React, { useState } from 'react'

import { auth, db } from "../../../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";


import { FaMicrophone, FaPaperclip } from 'react-icons/fa6';
import IconButton from '../../../atoms/buttons/IconButton';
import { Container, Form, Input } from './Footer.styles';


const Footer = ({ chatId }) => {
    const [user] = useAuthState(auth);
    const [message, setMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();

        db.collection("chats").doc(chatId).collection("messages").add({
            message: message,
            user: user.email,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setMessage("");
    };

    return (
        <Container>
            <FaPaperclip/>
            <Form onSubmit={handleSendMessage}>
                <Input 
                    placeholder='Mensagem'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <IconButton icon={<FaMicrophone/>} onClick={handleSendMessage}/>
            </Form>
        </Container>
    )
}

export default Footer