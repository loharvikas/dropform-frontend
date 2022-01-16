import React, { useState, useContext } from 'react';

import { AuthContext } from '../context/AuthContext';
import { Form, Header } from '../components';
import { Break } from '../globalStyles';
import { LogoSVG } from '../assets/icons';
import axiosInstance from '../lib/axios';
import * as ROUTES from '../constants/routes';
import * as STYLES from '../constants/styles';



const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const { setUser, setAuthTokens, GoogleLogin } = useContext(AuthContext);

    const isInValid = email === '' || password === '';
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const payload = {
            email: email,
            password: password
        }

        axiosInstance
            .post('login/', payload)
            .then(res => {
                const data = res.data;
                setAuthTokens({ access_token: data.access, refresh_token: data.refresh })
                setUser(data.user)
                axiosInstance.defaults.headers['Authorization'] =
                    'Bearer ' + data.access
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false)
                setMessage('Email address or password is invalid please check!');
            })
    }




    return (
        <>
            <Header main='true'>
                <Header.Frame>
                    <Header.Group>
                        <Header.LogoText LogoSvg={LogoSVG} to={ROUTES.HOME}>DropForm</Header.LogoText>
                    </Header.Group>
                </Header.Frame>
            </Header>
            <Break />
            <Form>
                <Form.Wrapper>
                    {loading && <Form.Loader />}
                    <Form.Title>Welcome back!</Form.Title>
                    {message && <Form.Error type='Error'>{message}</Form.Error>}
                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Label htmlFor='email'>
                            Email Address
                        </Form.Label>
                        <Form.Input
                            id='email'
                            type='email'
                            placeholder='Enter your email addess...'
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Label htmlFor='password'>
                            Password
                        </Form.Label>
                        <Form.Input
                            id='password'
                            type='password'
                            placeholder='Enter your password...'
                            value={password}
                            autoComplete='off'
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Link to={ROUTES.SIGN_UP}>Forget password ?</Form.Link>

                        <Form.Submit
                            disabled={isInValid}
                            type='submit'
                            subType={STYLES.BUTTON_PRIMARY}
                        >
                            Sign in
                        </Form.Submit>
                        <GoogleLogin buttonText='Sigin in with Google' />
                    </Form.Base>
                    <Form.Text>
                        Don't have an account ? <Form.Link to={ROUTES.SIGN_UP}>Create an account</Form.Link>
                    </Form.Text>
                </Form.Wrapper>
            </Form>
        </>

    )
}

export default Signin;