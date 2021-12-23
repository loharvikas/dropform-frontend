import { createContext, useEffect, useCallback  } from "react";
import { useLocalStorage } from "../hooks";

import jwt_decode from "jwt-decode";
import axiosInstance from "../lib/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null);
    const [authTokens, setAuthTokens] = useLocalStorage('auth_tokens', null);

    const logOut = () => {
        setUser('');
        setAuthTokens('');
        localStorage.removeItem('auth_okens')
        localStorage.removeItem('user')
    }

    const updateTokens = useCallback(() => {
        const refreshToken = authTokens.refresh_token;
        axiosInstance
            .post('token/refresh/', {refresh: refreshToken})
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
                if(err.response.status === 401) {
                    logOut();
                }
            })
    }, [authTokens.refresh_token])



    const openGoogleLoginPage = useCallback(() => {
        const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
        const redirectUri = 'api/oauth/google/';
      
        const scope = [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile'
        ].join(' ');
        
        
        const params = {
          response_type: 'code',
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          redirect_uri: `${process.env.REACT_APP_BASE_BACKEND_URL}/${redirectUri}`,
          prompt: 'select_account',
          access_type: 'offline',
          scope
        };
      
        const urlParams = new URLSearchParams(params).toString();
      
        window.location = `${googleAuthUrl}?${urlParams}`;
      }, []);

    
    useEffect(() => {
        if(authTokens) {
            const decoded = jwt_decode(authTokens.access_token);
            const expiryDate = decoded.exp * 1000
            if (Date.now() >= expiryDate) {
                updateTokens();
            } else {
                axiosInstance
                    .get(`users/${user.id}/`)
                    .then(res => {
                        console.log({res})
                        setUser(res.data)
                    })
                    .catch(err => err)
            }
        }
    }, [])


    const contextObject = {
        user: user,
        authTokens: authTokens,
        setUser: setUser,
        setAuthTokens: setAuthTokens,
        logOut:logOut,
        updateTokens: updateTokens,
        googleAuth: openGoogleLoginPage
    }

    return (
        <AuthContext.Provider value={contextObject}>
            { children }
        </AuthContext.Provider>
    )
}
