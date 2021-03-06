import React, { useState, useContext } from 'react';
import { Header } from '../components';
import { InnerWrapper, LoaderWrapper, Loader } from '../globalStyles';
import { Routes, Route, Outlet } from 'react-router-dom';
import { MembersContainer, WorkspaceContainer, SidebarContainer, FormContainer, AccountContainer, BillingContainer } from '../containers';
import * as ROUTES from '../constants/routes';
import { SideBarBreak } from '../components/Sidebar/Sidebar.styles';
import { AuthContext } from '../context/AuthContext'
import { Alert } from '../components';


import axiosInstance from '../lib/axios';

const Product = () => {
    const [workspaceList, setWorkspaceList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { logOut, user } = useContext(AuthContext);

    const sendActivationEmail = () => {
        setLoading(true)
        axiosInstance
            .post(`users/send-activation-email/`)
            .then((res) => {
                setLoading(false);
                setToggle(true);
            })
            .catch((err) => {
                setLoading(false);
                setToggle(true);
            })
    }


    return (
        <InnerWrapper>
            {loading &&
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            }
            <SidebarContainer
                setWorkspaceList={setWorkspaceList}
                workspaceList={workspaceList}
            />
            <SideBarBreak />
            <InnerWrapper direction='column'>
                <Header main='false'>
                    <Header.Frame>
                        <Header.Group>
                            <Header.LinkText to={ROUTES?.DASHBOARD} >Dashboard</Header.LinkText>
                            <Header.LinkText to={ROUTES?.MEMBERS} >Members</Header.LinkText>
                            <Header.LinkText to={ROUTES?.BILLING}>Billing</Header.LinkText>
                            <Header.LinkText to={ROUTES?.ACCOUNT}>Account</Header.LinkText>
                            <Header.LinkText to='#' type='defined'>{user.account_type}</Header.LinkText>
                        </Header.Group>
                        <Header.Group>
                            <Header.ButtonLink primary='false' to={ROUTES.SIGN_IN} onClick={logOut}>Signout</Header.ButtonLink>
                        </Header.Group>
                    </Header.Frame>
                </Header>
                {
                    user.is_verified === false &&
                    <Alert>
                        <Alert.Frame>
                            <Alert.Text>
                                Please verify your email with the link we sent to <b style={{ textDecoration: 'underline', color: 'black' }}>{`${user.email}`}</b>
                            </Alert.Text>
                            {
                                toggle ?
                                    <Alert.Button onClick={sendActivationEmail}>
                                        Send again
                                    </Alert.Button>
                                    :
                                    <Alert.Button onClick={sendActivationEmail}>
                                        Send verification token
                                    </Alert.Button>
                            }
                        </Alert.Frame>
                    </Alert>
                }
                <Routes>
                    <Route path={ROUTES.DASHBOARD} element={<Outlet />}>
                        <Route path={'workspace/:workspaceId/' + ROUTES.FORMS + ':formId'} element={<FormContainer />} />
                        <Route
                            path={ROUTES.WORKSPACE + ':workspaceId'}
                            element={
                                <WorkspaceContainer
                                    workspaceList={workspaceList}
                                    setWorkspaceList={setWorkspaceList}
                                />
                            }
                        >
                        </Route>
                        <Route path='*' element={<div>Sorry lost go back!</div>} />
                    </Route>
                    <Route path={ROUTES.MEMBERS} element={<MembersContainer />} />
                    <Route path={ROUTES.BILLING} element={<BillingContainer />} />
                    <Route path={ROUTES.ACCOUNT} element={<AccountContainer />} />
                </Routes>
            </InnerWrapper>
        </InnerWrapper>
    )
}

export default Product;
