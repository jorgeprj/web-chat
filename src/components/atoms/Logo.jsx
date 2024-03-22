import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    width: 64px;
    height: 64px;
`

const Logo = ({ className, src }) => {
    return (
        <Image className={className} src={src} alt='Logo do PET-BCC'/>
    )
}
export default Logo