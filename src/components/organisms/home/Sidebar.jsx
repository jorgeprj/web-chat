import React from 'react'

import { Container } from './Sidebar.styles'

import { FaDiagramProject, FaMessage, FaUsers } from 'react-icons/fa6'
import SidebarIcon from '../../molecules/home/sidebar/SidebarIcon'

const Sidebar = () => {
    return (
        <Container>
            <SidebarIcon icon={<FaMessage/>} text={"Mensagens"} className={"active"}/>
            <SidebarIcon icon={<FaUsers/>} text={"Membros"}/>
            <SidebarIcon icon={<FaDiagramProject/>} text={"Projetos"}/>
        </Container>
    )
}

export default Sidebar