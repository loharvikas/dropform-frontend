import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, useParams } from 'react-router-dom';

import { Form, Modal } from '../components';
import { FormSVG, CreateFormSVG } from '../assets/icons';
import { Workspace } from '../components';
import { getDatetime } from '../utils/helper';
import * as ROUTES from '../constants/routes';
import * as STYLES from '../constants/styles';
import axiosInstance from '../lib/axios';
import { Feature, FeatureTitle, LoaderWrapper, Loader } from '../globalStyles';


const WorkspaceContainer = ({ workspaceList, setWorkspaceList }) => {
    const [workspace, setWorkspace] = useState(null)
    const [forms, setForms] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [toggle, setToggle] = useState(false);
    const { workspaceId } = useParams();

    useEffect(() => {
        setLoading(true);

        axiosInstance
            .get(`forms/${workspaceId}/`)
            .then(res => {
                setLoading(false);
                setForms(res.data)
            })
            .catch((err) => {
                setLoading(false);
            })
    }, [workspaceId])


    useEffect(() => {
        const element = workspaceList.find(item => item.id === parseInt(workspaceId))
        setWorkspace(element)
    }, [workspaceId, workspaceList])


    useEffect(() => {
        document.title = 'Dashboard -Dropform'
    }, [])


    return (
        <>
            {showForm &&
                ReactDOM.createPortal(
                    <CreateFormContainer
                        setShowForm={setShowForm}
                        forms={forms}
                        setForms={setForms}
                        workspace={workspace}
                    />, document.body)
            }
            {toggle &&
                ReactDOM.createPortal(
                    <DeleteWorkspace
                        setToggle={setToggle}
                        workspace={workspace}
                        setWorkspaceList={setWorkspaceList}
                    />, document.body)
            }
            <Workspace>
                {
                    loading &&
                    <LoaderWrapper>
                        <Loader />
                    </LoaderWrapper>
                }
                <Workspace.Frame>
                    <Workspace.Group>
                        <Workspace.Title>
                            {workspace?.name}
                        </Workspace.Title>
                    </Workspace.Group>
                    <Workspace.Group>
                        <Workspace.Button
                            onClick={() => setToggle(true)}
                            subType={STYLES.BUTTON_SECONDARY}
                        >Delete this workspace
                        </Workspace.Button>
                        <Workspace.Button onClick={() => setShowForm(true)}>Add new form</Workspace.Button>
                    </Workspace.Group>
                </Workspace.Frame>
                {forms.length > 0 ?
                    <Workspace.Items>
                        {forms.map(item => (
                            <Link to={ROUTES.FORMS + `${item.uuid}`} key={item.id} >
                                <Workspace.Item>
                                    <Workspace.Group>
                                        <FormSVG />
                                        <Workspace.ItemTitle>{item.name}</Workspace.ItemTitle>
                                    </Workspace.Group>
                                    <Workspace.Group>
                                        <Workspace.ItemDate>{getDatetime(item.created_date)}</Workspace.ItemDate>
                                    </Workspace.Group>
                                </Workspace.Item>
                            </Link>
                        ))}
                    </Workspace.Items>
                    : (
                        <Feature>
                            <FeatureTitle>You have not created any forms yet!</FeatureTitle>
                            <CreateFormSVG />
                        </Feature>
                    )
                }
            </Workspace>
        </>
    )
}

const DeleteWorkspace = ({ workspace, setToggle, setWorkspaceList }) => {

    const handleSubmit = e => {
        axiosInstance
            .delete(`workspace/detail/${workspace.id}/`)
            .then(res => {
                setToggle(false);
                setWorkspaceList(prevState => prevState.filter(item => item.id !== workspace.id))
            })
            .catch(err => console.log(err))
    }

    return (
        <Modal>
            <Modal.Inner>
                <Modal.Header>
                    <Modal.Title>
                        Delete this workspace.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ fontWeight: 'bold' }}>
                        Are you sure you want to delete this workspace ?
                    </div>
                    <Modal.Close onClick={() => setToggle(false)} />
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Modal.Button onClick={() => setToggle(false)} subType={STYLES.BUTTON_SECONDARY}>
                            Cancel
                        </Modal.Button>
                        <Modal.Button onClick={handleSubmit}>
                            Delete
                        </Modal.Button>
                    </div>
                </Modal.Footer>
            </Modal.Inner>
        </Modal>
    )
}

const initialState = {
    name: '',
    description: '',
    worksapce: '',
}

const CreateFormContainer = ({ setShowForm, forms, setForms, workspace }) => {
    const [form, setForm] = useState(initialState)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const { name, description } = form;

        axiosInstance
            .post('forms/', { name: name, description: description, workspace: workspace })
            .then(res => {
                setLoading(false);
                setShowForm(false);
                setForm('')
                setForms([res.data, ...forms]);
            })
            .catch(err => {
                setLoading(false);
                setForm('')
                setError(err.message)
            })
    }

    return (
        <Modal>
            <Modal.Inner>
                <Modal.Header>
                    <Modal.Title>New Form</Modal.Title>
                    <Modal.Text>Create new form and start collection submissions.</Modal.Text>
                </Modal.Header>
                <Modal.Body>
                    <Form.Wrapper type='subForm'>
                        {loading && <Form.Loader />}
                        {error && <Form.Error>{error}</Form.Error>}
                        <Form.Base>
                            <Form.Label htmlFor='form_name'>
                                Form name
                            </Form.Label>
                            <Form.Input
                                id='form_name'
                                type='text'
                                placeholder='Enter your form name...'
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
                        <Modal.Button
                            onClick={() => setShowForm(false)}
                            subType={STYLES.BUTTON_SECONDARY}
                        >
                            Cancel
                        </Modal.Button>
                        <Modal.Button
                            onClick={handleSubmit}
                            subType={STYLES.BUTTON_PRIMARY}
                        >
                            Submit
                        </Modal.Button>
                    </div>
                </Modal.Footer>
            </Modal.Inner>
        </Modal>
    )
}


export default WorkspaceContainer;