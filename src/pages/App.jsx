import React, { useState } from 'react';
import { Header } from '../components';
import { AppWrapper } from '../globalStyles';
import { Routes, Route, Outlet } from 'react-router-dom';
import { MembersContainer, WorkspaceContainer, SidebarContainer, FormContainer, AccountContainer } from '../containers';
import * as ROUTES from '../constants/routes';
import { SideBarBreak } from '../components/Sidebar/Sidebar.styles';

const App = () => {
    const [workspace, setWorkspace] = useState(null);
    
    return (
        <AppWrapper>
            <SidebarContainer  workspace={workspace} setWorkspace={setWorkspace}/>
            <SideBarBreak />
            <AppWrapper direction='column'>
                <Header main='false'>
                    <Header.Frame>
                        <Header.Group>
                            <Header.LinkText to={ROUTES?.DASHBOARD} active='true'>Dashboard</Header.LinkText>
                            <Header.LinkText to={ROUTES?.BILLING}>Billing</Header.LinkText>
                            <Header.LinkText to={ROUTES?.ACCOUNT}>Account</Header.LinkText>
                        </Header.Group>
                            <Header.Group>
                                <Header.ButtonLink primary='false' to={ROUTES.SIGN_OUT}>Signout</Header.ButtonLink>
                            </Header.Group>
                        </Header.Frame>
                    </Header>

                        <Routes>
                            <Route path={ROUTES.DASHBOARD} element={<Outlet />}>
                                <Route path='' element={<WorkspaceContainer workspace={workspace} />} />
                                <Route path={ROUTES.FORMS + ':formId'} element={<FormContainer />} />
                                <Route path='*' element={<div>Sorry lost go back!</div>} />
                            </Route>
                            <Route path={ROUTES.MEMBERS} element={<MembersContainer />} />
                            <Route path={ROUTES.ACCOUNT} element={<AccountContainer />} />
                        </Routes>
                </AppWrapper>
        </AppWrapper>
    )
}

export default App
