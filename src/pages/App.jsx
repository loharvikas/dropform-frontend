import React, { useState } from 'react';
import { SidebarContainer, AppContainer } from '../containers';
import { AppWrapper } from '../globalStyles';

const App = () => {
    const [workspace, setWorkspace] = useState({});
    return (
        <>
            <AppWrapper>
                <SidebarContainer workspace={workspace} setWorkspace={setWorkspace}/>
                <AppContainer workspace={workspace}></AppContainer>
            </AppWrapper>
        </>
    )
}

export default App
