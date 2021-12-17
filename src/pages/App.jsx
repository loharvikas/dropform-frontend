import React, { useState } from 'react';
import { SidebarContainer, AppContainer } from '../containers';
import { AppWrapper, Break } from '../globalStyles';
import { SideBarBreak } from '../components/Sidebar/Sidebar.styles';

const App = () => {
    const [workspace, setWorkspace] = useState(null);
    
    return (
        <AppWrapper>
            <SidebarContainer  workspace={workspace} setWorkspace={setWorkspace}/>
            <SideBarBreak />
            <AppContainer workspace={workspace}/>
        </AppWrapper>
    )
}

export default App
