import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Form, Header } from '../components';
import { Break } from '../globalStyles';
import { LogoSVG } from '../assets/Logo';
import axiosInstance from '../lib/axios';
import * as ROUTES from '../constants/routes';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { setUser, setAuthTokens } = useContext(AuthContext); 
    const navigate = useNavigate();

    const isInValid = email === '' || password === '';

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        const payload = {
            email: email,
            password: password
        }
        
        axiosInstance
            .post('login/', payload)
            .then(res => {
                const data = res.data;
                setAuthTokens({access_token: data.access, refresh_token: data.refresh})
                setUser(data.user)
                console.log('Bearer' + data.access)
                axiosInstance.defaults.headers['Authorization']=
                    'Bearer ' + data.access
                navigate('app/dashboard/');
            })
            .catch((error) => {
                setError(error);
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
                    <Form.Title>Sign In</Form.Title>
                    { error && <Form.Error>{ error }</Form.Error>}
                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Input 
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input 
                            type='password'
                            placeholder='Password'
                            value={password}
                            autoComplete='off'
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Link to={ROUTES.SIGN_UP}>Forget password ?</Form.Link>
                        <Form.Submit disabled={isInValid} type='submit'>
                            Sign In
                        </Form.Submit>
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