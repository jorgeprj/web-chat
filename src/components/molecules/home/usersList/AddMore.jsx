import React from 'react';

import * as EmailValidator from 'email-validator';
import { auth, db } from "../../../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

import IconButton from '../../../atoms/buttons/IconButton';

import { Container } from './AddMore.styles';

const AddMore = ({ icon }) => {
    const [user] = useAuthState(auth);
    const refChat = db
        .collection("chats")
        .where("users", "array-contains", user.email);
    const [chatsSnapshot] = useCollection(refChat);

    const handleCreateChat = () => {
        const nameInput = prompt("Escreva o nome desejado");
        const emailInput = prompt("Escreva o e-mail desejado");

        if (!emailInput) return;

        if (!EmailValidator.validate(emailInput)) {
            return alert("E-mail inválido!");
        } else if (emailInput === user.email) {
            return alert("Insira um e-mail diferente do seu!");
        } else if (chatExists(emailInput)) {
            return alert("Chat já existe!");
        }

        db.collection("chats").add({
            users: [user.email, emailInput],
            names: [user.displayName, nameInput]
        });
    };

    const chatExists = (emailChat) => {
        return !!chatsSnapshot?.docs.find(
            (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
        );
    };

    return (
        <Container>
            <p>Você chegou no final.</p>
            <h4>Adicione mais pessoas</h4>
            <IconButton icon={icon} onClick={handleCreateChat} />
        </Container>
    );
};

export default AddMore;