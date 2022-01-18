import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Sidebar, Modal, Form } from '../components';
import { PlusSVG, LogoSVG } from '../assets/icons'
import { AuthContext } from '../context/AuthContext';
import axiosInstance from '../lib/axios';
import * as ROUTES from '../constants/routes';
import * as STYLES from '../constants/styles';
import { LoaderWrapper, Loader } from '../globalStyles';


const Frame = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    margin-top:20px;
    margin-bottom: 10px;
    align-items: center;
`

const SidebarContainer = ({ workspaceList, setWorkspaceList }) => {
    const [showForm, setShowForm] = useState(false);
    const { user, updateTokens } = useContext(AuthContext);

    useEffect(() => {
        axiosInstance
            .get(`workspace/${user.id}/`)
            .then(res => {
                if (res?.status === 200) {
                    setWorkspaceList(res.data);
                }
            })
            .catch(error => {
                if (error?.response?.status === 401) {
                    updateTokens();
                }
            });

    }, [user?.id, setWorkspaceList, updateTokens]);



    return (
        <Sidebar>
            <Sidebar.Header>
                <Sidebar.Image src='https://avatars.dicebear.com/api/adventurer/wo.svg' />
                <Sidebar.Title>{user.full_name}</Sidebar.Title>
            </Sidebar.Header>
            <Sidebar.Items>
                <Frame>
                    <Sidebar.ItemsTitle>workspaces</Sidebar.ItemsTitle>
                    <Sidebar.Button onClick={() => setShowForm(prevState => !prevState)}>
                        <PlusSVG />
                    </Sidebar.Button>
                </Frame>
                {
                    workspaceList.map(item => (
                        <Sidebar.TextLink
                            key={item.id}
                            to={'dashboard/' + ROUTES.WORKSPACE + item?.id}
                        >
                            {item.name}
                        </Sidebar.TextLink>
                    ))
                }
            </Sidebar.Items>

            <Sidebar.Footer>
                <LogoSVG />
                <Sidebar.Title>DropForm</Sidebar.Title>
            </Sidebar.Footer>

            {showForm &&
                ReactDOM.createPortal(
                    <CreateWorkspace
                        workspaceList={workspaceList}
                        setWorkspaceList={setWorkspaceList}
                        setShowForm={setShowForm}
                        user={user}
                    />, document.body
                )
            }
        </Sidebar>
    )
}

const initialData = {
    name: '',
    description: '',
    user: ''
}

const CreateWorkspace = ({ workspaceList, setWorkspaceList, user, setShowForm }) => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    const handleSubmit = e => {
        setLoading(true);
        e.preventDefault();
        const { name, description } = form;

        const payload = {
            name: name,
            description: description,
            user: user.id
        }

        axiosInstance
            .post('workspace/', payload)
            .then((res) => {
                setLoading(false);
                setForm(initialData)
                setShowForm(false);
                setWorkspaceList([...workspaceList, res.data]);
            })
            .catch(err => {
                setLoading(false);
                setForm(initialData)
            })
    }

    return (
        <Modal>
            <Modal.Inner>
                <Modal.Header>
                    <Modal.Title>New Workspace</Modal.Title>
                    <Modal.Text>Create new workspace and start collecting submissions.</Modal.Text>
                </Modal.Header>
                {loading &&
                    <LoaderWrapper>
                        <Loader />
                    </LoaderWrapper>
                }
                <Modal.Body>
                    <Form.Wrapper type='subForm'>
                        <Form.Base>
                            <Form.Label htmlFor='workspace_name'>
                                Workspace Name
                            </Form.Label>
                            <Form.Input
                                id='workspace_name'
                                type='text'
                                placeholder='Enter your workspace name...'
                                name='name'
                                onChange={handleChange}
                            />
                            <Form.Label htmlFor='description'>
                                Description
                            </Form.Label>
                            <Form.TextArea
                                rows="5"
                                id='description'
                                name='description'
                                onChange={handleChange}
                            />
                        </Form.Base>
                    </Form.Wrapper>
                    <Modal.Close onClick={() => setShowForm(false)} />
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Modal.Button subType={STYLES.BUTTON_SECONDARY} onClick={() => setShowForm(false)}>
                            Cancel
                        </Modal.Button>
                        <Modal.Button onClick={handleSubmit}>
                            Submit
                        </Modal.Button>
                    </div>
                </Modal.Footer>
            </Modal.Inner>
        </Modal>
    )

}

export default SidebarContainer
