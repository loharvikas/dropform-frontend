import React, { useState } from 'react';
import { Sidebar } from '../components';
import WorkspaceJSON from '../workspace.json';
import { PlusSVG } from '../assets/plus';

const SidebarContainer = ({ workspace, setWorkspace }) => {
    const [ createToggle, setCreateToggle ] = useState(true);
    
    return (
        <Sidebar>
            <Sidebar.Header>
                <Sidebar.Image src='https://avatars.dicebear.com/api/adventurer/wo.svg'/>
                <Sidebar.Title>Vikas Lohar</Sidebar.Title>
            </Sidebar.Header>
            <Sidebar.Items>
                <Sidebar.ItemsTitle>Your workspace</Sidebar.ItemsTitle>
                {
                    WorkspaceJSON.workspaces.map(item => (
                        <Sidebar.TextLink 
                            to='#' 
                            key={item.id}
                            onClick={() => setWorkspace(item)}
                            active={item.id === workspace?.id ? 'true' : 'false'}
                        >
                            {item.name}
                        </Sidebar.TextLink>
                    ))
                }
            </Sidebar.Items>
            { createToggle && <Sidebar.TextInput placeholder='workspace...' />}
            <Sidebar.Button onClick={() => setCreateToggle(prevState => !prevState)}>
                <PlusSVG />
            </Sidebar.Button>
        </Sidebar>
    )
}

export default SidebarContainer
