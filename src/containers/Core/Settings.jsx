import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Form, Modal } from '../../components';
import styled from 'styled-components';
import UseSwitchesBasic from '../../components/Switch';
import axiosInstance from '../../lib/axios';
import { GlobalButton } from '../../globalStyles';

const Frame = styled.div`
    display:flex;
    justify-content: space-between;
`

const Group = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: 40px;
`

const initialState = {
    data:'',
    type:''
}

export const SettingsContainer = ({ formId }) =>  {
    const [formName, setFormName] = useState('');
    const [description, setDescription] = useState('');
    const [active, setActive] = useState(true);
    const [alert, setAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(initialState);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axiosInstance
            .get(`forms/detail/${formId}/`)
            .then(res => {
                setFormName(res.data.name);
                setDescription(res.data.description)
                setActive(res.data.active);
                setAlert(res.data.alert)
            })
            .catch(err => {
                console.log(err)
            }) 
    }, [formId])

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setMessage(initialState)
        
        const payload = {
            'name': formName,
            'description':description,
            'active': active,
            'alert': alert
        }
        
        axiosInstance
            .patch(`forms/detail/${formId}/`, payload)
            .then(res => {
                setMessage({data:'Your information is successfully updated!', type: 'Success'});
                setLoading(false);
            })
            .catch(err => {
                setMessage({data:'Invalid data', type: 'Error'})
                setLoading(false);
            })
    }
    
    
    return (
        <>
            {toggle && ReactDOM.createPortal(
                <DeleteEndpoint formId={formId} setToggle={setToggle}/>,
            document.body)}
            <Form.Wrapper type='subForm'>
                { loading && <Form.Loader /> }
                { message.data && <Form.Alert type={message.type}>{ message.data }</Form.Alert>}
                <Form.Base onSubmit={handleSubmit}>
                    <Frame>
                        <Form.Title type='subForm'>Settings</Form.Title>
                        <GlobalButton 
                            subtype='danger' 
                            type='button'
                            onClick={() => setToggle(true)}
                        >
                            Delete this endpoint
                        </GlobalButton>
                    </Frame>
                    <Group>
                        <Form.Label htmlFor='form_name' type='subForm'>
                            Form Name
                        </Form.Label>
                        <Form.Text type='subForm'>This information will not be displayed publicly.</Form.Text>
                        <Form.Input 
                            id='form_name'
                            type='text'
                            formType='subForm'
                            placeholder='Enter form name...'
                            value={formName}
                            onChange={({ target }) => setFormName(target.value)}
                        />
                    </Group>
                    <Group>
                        <Form.Label htmlFor='description' type='subForm'>
                            Description
                        </Form.Label>
                        <Form.Text type='subForm'>This information will not be displayed publicly.</Form.Text>
                        <Form.TextArea
                            rows='5'
                            id='description'
                            formType='subForm'
                            value={description}
                            onChange={({ target }) => setDescription(target.value)}
                        />
                    </Group>
                    <Group>
                        <Frame>
                                <div>
                                    <Form.Label htmlFor='password' type='subForm'>
                                        Form Enabled
                                    </Form.Label>
                                    <Form.Text type='subForm'>
                                                Once disabled yout will not receivie any new submission.
                                    </Form.Text>
                                </div>
                        <UseSwitchesBasic handleChange={() => setActive(prevState => !prevState)} checked={active}/>
                        </Frame>
                    </Group>
                    <Group>
                        <Frame>
                            <div>
                                <Form.Label htmlFor='email_notification' type='subForm'>
                                Email notification
                                </Form.Label>
                                <Form.Text type='subForm'>
                                    Enable or disable sending email notifications.
                                </Form.Text>
                            </div>
                            <UseSwitchesBasic handleChange={() => setAlert(prevState => !prevState)} checked={alert}/>
                        </Frame>
                    </Group>
                    <Frame>
                        <div>
                            <Form.Submit  type='submit' formType='subForm'>
                                Save changes
                            </Form.Submit>
                        </div>
                    </Frame>
                </Form.Base>
            </Form.Wrapper>
        </>
    )
}


const DeleteEndpoint = ({ formId, setToggle }) => {

    const handleSubmit = e => {
        axiosInstance
            .delete(`forms/detail/${formId}/`)
            .then(res => {
                setToggle(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <Modal>
            <Modal.Inner>
                <Modal.Header>
                    <Modal.Title>
                        Delete Endpoint
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{fontWeight:'600', padding:'20px', fontSize:'14px', color:'var(--txt-secondary)'}}>
                        Are you sure you want to delete this endpoint?
                    </div>
                    <Modal.Close onClick={() => setToggle(false)} />
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Modal.Button type='secondary' onClick={() => setToggle(false)}>
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