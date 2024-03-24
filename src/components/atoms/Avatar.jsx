import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

const Avatar = ({src}) => {
    return (
        <Image src={src} alt='Avatar'/>
    )
}

export default Avatar