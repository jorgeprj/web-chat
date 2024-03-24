import React from 'react';

import { auth } from "../../../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Avatar from '../../../atoms/Avatar';
import { MdPerson } from 'react-icons/md';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { Container } from './UserInfo.styles';


const UserInfo = ({ setUserChat }) => {
    const [user] = useAuthState(auth);

    return (
        <Container>
            <p>{user.displayName}</p>
            {user.photoURL ? <Avatar src={user.photoURL} alt="Avatar" /> : <MdPerson />}
            <FaArrowRightFromBracket className='logout' onClick={() => [auth.signOut(), setUserChat(null)]}/>
        </Container>
    )
}

export default UserInfo