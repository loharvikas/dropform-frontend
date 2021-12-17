import React from 'react';
import { Header } from '../components';
import { AppWrapper, GlobalWrapper } from '../globalStyles';
import { Routes, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { DashboardContainer, MembersContainer} from '.';

const AppContainer = ({ workspace }) => (
    
    <AppWrapper direction='column'>
       <Header main='false'>
            <Header.Frame>
                <Header.Group>
                    <Header.LinkText to={ROUTES?.DASHBOARD} active='true'>Dashboard</Header.LinkText>
                    <Header.LinkText to={ROUTES?.MEMBERS}>Members</Header.LinkText>
                    <Header.LinkText to={ROUTES?.BILLING}>Billing</Header.LinkText>
                    <Header.LinkText to={ROUTES?.PROFILE}>Profile</Header.LinkText>
                </Header.Group>
                <Header.Group>
                    <Header.ButtonLink primary='false' to={ROUTES.SIGN_OUT}>Signout</Header.ButtonLink>
                </Header.Group>
            </Header.Frame>
        </Header>
        <GlobalWrapper>
            <Routes>
                <Route 
                    path={ROUTES.DASHBOARD + '/*'} 
                    element={<DashboardContainer workspace={workspace}/>} 
                />
                <Route path={ROUTES.MEMBERS} element={<MembersContainer />} />
            </Routes>
        </GlobalWrapper>
    </AppWrapper>
)


export default AppContainer
