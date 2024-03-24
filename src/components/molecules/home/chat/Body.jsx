import React from "react";

import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../../services/firebase";

import Message from "../../../atoms/Message";

import { Container, MDate } from "./Body.styles";

const formatDate = (timestamp) => {
    const messageDate = new Date(timestamp);
    const currentDate = new Date();
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    if (
        messageDate.getDate() === currentDate.getDate() &&
        messageDate.getMonth() === currentDate.getMonth() &&
        messageDate.getFullYear() === currentDate.getFullYear()
    ) {
        return "Hoje";
    } else if (
        messageDate.getDate() === yesterday.getDate() &&
        messageDate.getMonth() === yesterday.getMonth() &&
        messageDate.getFullYear() === yesterday.getFullYear()
    ) {
        return "Ontem";
    } else {
        const options = { day: "2-digit", month: "short" };
        return messageDate.toLocaleDateString("pt-BR", options);
    }
};

const Body = ({ chatId }) => {
    const [messagesRes] = useCollection(
        db
            .collection("chats")
            .doc(chatId)
            .collection("messages")
            .orderBy("timestamp", "asc")
    );

    let lastDateDisplayed = null;

    return (
        <Container>
            {messagesRes?.docs.map((message) => {
                const messageData = message.data();
                const messageTimestamp = messageData.timestamp?.toDate().getTime();
                const formattedDate = formatDate(new Date(messageTimestamp));
                const displayDate = lastDateDisplayed !== formattedDate;

                lastDateDisplayed = formattedDate;

                return (
                    <React.Fragment key={message.id}>
                        {displayDate && (
                            <MDate>
                                <span>{formattedDate}</span>
                            </MDate>
                        )}
                        <Message
                            user={messageData.user}
                            message={{
                                message: messageData.message,
                                timestamp: messageTimestamp,
                            }}
                        />
                    </React.Fragment>
                );
            })}
        </Container>
    );
};

export default Body;
