import React from 'react'

import { Container } from './Sidebar.styles'

import SidebarIcon from '../../molecules/home/sidebar/SidebarIcon'
import { FaDiagramProject, FaMessage, FaUsers } from 'react-icons/fa6'

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