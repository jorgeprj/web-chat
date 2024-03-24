import React from 'react'
import styled from "styled-components";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import { getHours } from '../../utils/Hours.utils';

const Container = styled.div``;

const Line = styled.div`
    margin: 10px;
    display: flex;

    &.me {
        > div {
        background-color: var(--primary-color);
        color: #fff;
        }
        justify-content: right;
    }
`;

const Content = styled.div`
    background-color: #F2F2F2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 3px;
    max-width: 80%;
`;
const Text = styled.span`
    font-size: 14px;
    margin: 5px 36px 5px 8px;
`;

const MDate = styled.span`
    font-size: 11px;
    text-align: right;
    height: 15px;
    margin: -5px 5px 0 ;
`;


const Message = ({ user, message }) => {
    const [userLoggedIn] = useAuthState(auth);

    return (
        <Container>
            <Line className={userLoggedIn?.email === user ? "me" : ""}>
                <Content>
                    <Text>{message.message}</Text>
                    <MDate>
                        {getHours(message?.timestamp)}
                    </MDate>
                </Content>
            </Line>
        </Container>
    )
}

export default Message