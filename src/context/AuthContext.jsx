import { createContext  } from "react";
import { useLocalStorage } from "../hooks";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null);
    const [authTokens, setAuthTokens] = useLocalStorage('auth_tokens', null);

    const contextObject = {
        user: user,
        authTokens: authTokens,
        setUser: setUser,
        setAuthTokens: setAuthTokens
    }

    return (
        <AuthContext.Provider value={contextObject}>
            { children }
        </AuthContext.Provider>
    )
}
