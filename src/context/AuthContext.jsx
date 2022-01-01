import { createContext, useEffect, useCallback } from "react";
import { GoogleLogin } from 'react-google-login';

import { useLocalStorage } from "../hooks";
import jwt_decode from "jwt-decode";
import axiosInstance from "../lib/axios";
import { GoogleButton } from "../globalStyles";
import { GoogleLogoSVG } from "../assets/icons";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null);
    const [authTokens, setAuthTokens] = useLocalStorage('auth_tokens', null);

    const logOut = useCallback(() => {
        setUser('');
        setAuthTokens('');
        localStorage.removeItem('auth_okens')
        localStorage.removeItem('user')
    }, [setUser, setAuthTokens])


    const updateTokens = useCallback(() => {
        const refreshToken = authTokens.refresh_token;

        axiosInstance
            .post('token/refresh/', { refresh: refreshToken })
            .then(res => {
                if (res.status === 200) {
                    const newAuthTokens = {
                        refresh_token: refreshToken,
                        access_token: res.data.access
                    }
                    setAuthTokens(newAuthTokens);
                    window.location.reload();
                }
            })
            .catch(err => {
                if (err.response.status === 401) {
                    logOut();
                }
            })
    }, [authTokens.refresh_token, logOut, setAuthTokens])


    const onGoogleLoginSuccess = (response) => {
        const payload = {
            email: response.profileObj.email,
            full_name: response.profileObj.givenName + ' ' + response.profileObj.familyName
        }
        console.log({ payload })
        axiosInstance
            .post('google/', payload)
            .then((res) => {
                const data = res.data
                setAuthTokens({ access_token: data.access, refresh_token: data.refresh })
                setUser(data.user)
            })
            .catch(error => {
                console.log(JSON.stringify(error))
            })
    }

    useEffect(() => {
        if (authTokens) {
            const decoded = jwt_decode(authTokens.access_token);
            const expiryDate = decoded.exp * 1000
            if (Date.now() >= expiryDate) {
                updateTokens();
            } else {
                axiosInstance
                    .get(`users/${user.id}/`)
                    .then(res => {
                        console.log({ res })
                        setUser(res.data)
                    })
                    .catch(err => err)
            }
        } //eslint-disable-next-line
    }, [])


    const GoogleLoginButton = ({ buttonText }) => (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={onGoogleLoginSuccess}
            onFailure={({ details }) => console.log(details)}
            render={renderProps => (
                <GoogleButton {...renderProps}>
                    <GoogleLogoSVG />
                    <span>{buttonText}</span>
                </GoogleButton>
            )}
        />
    )

    const contextObject = {
        user: user,
        authTokens: authTokens,
        setUser: setUser,
        setAuthTokens: setAuthTokens,
        GoogleLogin: GoogleLoginButton,
        logOut: logOut,
        updateTokens: updateTokens,
        onGoogleLoginSuccess: onGoogleLoginSuccess,
    }

    return (
        <AuthContext.Provider value={contextObject}>
            {children}
        </AuthContext.Provider>
    )
}


