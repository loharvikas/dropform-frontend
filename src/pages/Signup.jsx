import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Header } from '../components';
import { Break } from '../globalStyles';
import { LogoSVG } from '../assets/Logo';
import * as ROUTES from '../constants/routes';
import axiosInstance from '../lib/axios';
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { setUser, setAuthTokens } = useContext(AuthContext);
    const navigate = useNavigate();


    const isInValid = email === '' || password === '';

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true)
        setMessage('')
        axiosInstance.defaults.headers['Authorization']= null;
        const payload = Object.freeze({
            'full_name': fullName,
            'email': email,
            'password': password
        })

        axiosInstance
            .post('register/', payload)
            .then((res) => {
                setLoading(false)
                const data = res.data
                setAuthTokens({access_token: data.access, refresh_token: data.refresh})
                setUser(data.user)
                axiosInstance.defaults.headers['Authorization']=
                    'Bearer ' + data.access
                navigate(ROUTES.APP + '/' + ROUTES.DASHBOARD);
            })
            .catch(error => {
                setLoading(false)
                setMessage(error.response.data.email)
            })
    }
    
    return (
        <>
            <Header main='true'>
            <Header.Frame>
                <Header.Group>
                    <Header.LogoText LogoSvg={LogoSVG} to={ROUTES.HOME}>Formstack</Header.LogoText>
                </Header.Group>
            </Header.Frame>
            </Header>
            <Break />
            <Form>
                <Form.Wrapper>
                    { loading && <Form.Loader /> }
                    <Form.Title>Create an account</Form.Title>
                    { message && <Form.Alert type='Error'>{ message }</Form.Alert>}
                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Label htmlFor='name'>
                            Your Name
                        </Form.Label>
                        <Form.Input 
                            id='name'
                            type='text'
                            placeholder='Enter your name..'
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)}
                        />
                        <Form.Label htmlFor='email'>
                            Your email address
                        </Form.Label>
                        <Form.Input 
                            id='email'
                            type='email'
                            placeholder='Enter your email address...'
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Label htmlFor='password'>
                            Your password
                        </Form.Label>
                        <Form.Input 
                            id='password'
                            type='password'
                            placeholder='Enter your password...'
                            value={password}
                            autoComplete='off'
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInValid} type='submit'>
                            Create an account
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already have an account ? <Form.Link to={ROUTES.SIGN_IN}>Sign in</Form.Link>
                    </Form.Text>
                </Form.Wrapper>
            </Form>
        </>

    )
}

export default Signup;