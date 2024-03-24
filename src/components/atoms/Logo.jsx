import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    width: 48px;
    height: 48px;
`;

const Logo = ({ src }) => {
    return (
        <Image src={src} alt='Logo'/>
    )
}
export default Logo