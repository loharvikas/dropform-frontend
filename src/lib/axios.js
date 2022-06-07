import axios from "axios";

let BASE_URL = ''
if (process.env.REACT_APP_DEVELOPMENT_MODE === 'true') {
    BASE_URL = "http://localhost:8000/api/"
} else {
    BASE_URL = "https://api.dropform.co/api/"
}

const getAuthTokens = () => {
    const authTokens = localStorage.getItem('auth_tokens');
    return authTokens ? JSON.parse(authTokens).access_token : null
}

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        Authorization: getAuthTokens() !== null
            ? 'Bearer ' + getAuthTokens()
            : null,
        'Content-Type': "application/json",
        accept: "application/json",
    },
})

export default axiosInstance