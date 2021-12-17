import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export function IsRedirectUser ({ loggedInPath, children }) {
    const { user } = useContext(AuthContext);
    return user ? <Navigate to={loggedInPath} replace /> : children
}

export function ProtectedRoutes ({ children, redirectURL }) {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    
    return user ? children : <Navigate to={redirectURL} replace state={{path: location.pathname}}/>
}
