import React from 'react'

import { Container } from './SidebarIcon.styles'

const SidebarIcon = ({ className, icon, text }) => {
    return (
        <Container className={className}>
            {icon}
            <p>{text}</p>
        </Container>
    )
}

export default SidebarIcon