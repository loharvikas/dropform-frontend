import React, { useState } from 'react';
import { Form } from '../../components';
import styled from 'styled-components';
import UseSwitchesBasic from '../../components/Switch';
import axiosInstance from '../../lib/axios';

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
    const [formName, setFormName] = useState('New World');
    const [active, setActive] = useState(true);
    const [alert, setAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(initialState)

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setMessage(initialState)
        
        const payload = {
            'name': formName,
            'active': active,
            'alert': alert
        }
        
        axiosInstance
            .patch(`forms/detail/${formId}/`, payload)
            .then(res => {
                setMessage({data:'Your information is successfully updated!', type: 'Success'});
                setLoading(false);
                console.log(res.data)
            })
            .catch(err => {
                setMessage({data:'Invalid data', type: 'Error'})
                setLoading(false);
            })
    }
    
    
    return (
      <Form.Wrapper type='subForm'>
        { loading && <Form.Loader /> }
        { message.data && <Form.Alert type={message.type}>{ message.data }</Form.Alert>}
        <Form.Base onSubmit={handleSubmit}>
            <Form.Title type='subForm'>Settings</Form.Title>
            <Group>
                <Form.Label htmlFor='form_name' type='subForm'>
                    Form Name
                </Form.Label>
                <Form.Text type='subForm'>This informatino will not be displayed publicly.</Form.Text>
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
                <Frame>
                        <div>
                            <Form.Label htmlFor='password' type='subForm'>
                                Form Disabled
                            </Form.Label>
                            <Form.Text type='subForm'>
                                        Once disabled yout will not receivie any new submission.
                            </Form.Text>
                        </div>
                <UseSwitchesBasic onClick={() => setActive(prevState => !prevState)}/>
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
                    <UseSwitchesBasic onClick={() => setAlert(prevState => !prevState)}/>
                </Frame>
            </Group>
            
            <Frame>
                <div>
                    <Form.Submit  type='submit' formType='subForm'>
                        Save
                    </Form.Submit>
                    <Form.Submit  type='submit' formType='subForm' subType='secondary'>
                        Cancel
                    </Form.Submit>
                </div>
            </Frame>
        </Form.Base>
      </Form.Wrapper>
    )
}