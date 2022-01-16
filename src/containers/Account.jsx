import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext'
import { Form } from '../components';
import axiosInstance from '../lib/axios';

const Wrapper = styled.div`
    margin-top: 30px;

    &:last-child {
        margin-bottom: 30px;
    }
`

const Frame = styled.div`
    display:flex;
    justify-content: space-between;
`

const Group = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: 20px;
`

const InformationForm = ({ user, setUser }) => {
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.full_name);
    const [message, setMessage] = useState({ data: '', type: '' });
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage('');

        axiosInstance
            .put(`users/update/${user.id}/`, { email: email, full_name: name })
            .then(res => {
                setLoading(false);
                console.log({ res })
                setUser(res.data);
                setMessage({ data: 'Your information is successfully upadted!', type: 'Success' })
                setTimeout(() => setMessage(''), 3000)
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setMessage({ data: 'Invalid data!', type: 'Error' });
                setTimeout(() => setMessage(''), 3000)
            })

    }

    return (
        <Form.Wrapper type='subForm'>
            {loading && <Form.Loader />}
            {message.data && <Form.Error type={message.type}>{message.data}</Form.Error>}
            <Form.Base onSubmit={handleSubmit}>
                <Form.Title type='subForm'>Information</Form.Title>
                <Group>
                    <Form.Label htmlFor='email' type='subForm'>
                        Email
                    </Form.Label>
                    <Form.Input
                        id='email'
                        type='text'
                        formType='subForm'
                        placeholder='Enter your email...'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </Group>
                <Group>
                    <Form.Label htmlFor='name' type='subForm'>
                        Full name
                    </Form.Label>
                    <Form.Input
                        id='name'
                        type='text'
                        formType='subForm'
                        placeholder='Enter your name...'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </Group>
                <Frame>
                    <div>
                        <Form.Submit type='submit' formType='subForm'>
                            Save changes
                        </Form.Submit>
                    </div>
                </Frame>
            </Form.Base>
        </Form.Wrapper>
    )
}

const PasswordForm = ({ user }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState({ data: '', type: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setMessage('');
        setLoading(true);
        const payload = {
            old_password: currentPassword,
            new_password: newPassword
        }

        axiosInstance
            .put('users/password-change/', payload)
            .then(res => {
                console.log({ res })
                setLoading(false)
                setNewPassword('');
                setCurrentPassword('');
                setMessage({ data: 'Password updated successfully!', type: 'Success' });
            })
            .catch(err => {
                console.log({ err });
                setNewPassword('');
                setLoading(false);
                setCurrentPassword('');
                setMessage({ data: err.message, type: 'Error' })
            })
    }

    return (
        <Form.Wrapper type='subForm'>
            {loading && <Form.Loader />}
            {message.data && <Form.Error type={message.type}>{message.data}</Form.Error>}
            <Form.Base onSubmit={handleSubmit}>
                <Form.Title type='subForm'>Password</Form.Title>
                <Group>
                    <Form.Label htmlFor='current_password' type='subForm'>
                        Current password
                    </Form.Label>
                    <Form.Input
                        id='current_password'
                        type='password'
                        formType='subForm'
                        placeholder='Enter your current password...'
                        value={currentPassword}
                        onChange={({ target }) => setCurrentPassword(target.value)}
                    />
                </Group>
                <Group>
                    <Form.Label htlmFor='new_password' type='subForm'>
                        New password
                    </Form.Label>
                    <Form.Input
                        id='new_password'
                        type='password'
                        formType='subForm'
                        placeholder='Enter your new password...'
                        value={newPassword}
                        onChange={({ target }) => setNewPassword(target.value)}
                    />
                </Group>
                <Frame>
                    <div>
                        <Form.Submit type='submit' formType='subForm'>
                            Save changes
                        </Form.Submit>
                    </div>
                </Frame>
            </Form.Base>
        </Form.Wrapper>
    )
}


const AccountContainer = () => {
    const { user, setUser } = useContext(AuthContext);
    return (
        <>
            <Wrapper>
                <InformationForm user={user} setUser={setUser} />
            </Wrapper>
            <Wrapper>
                <PasswordForm user={user} />
            </Wrapper>
        </>
    )
}

export default AccountContainer;