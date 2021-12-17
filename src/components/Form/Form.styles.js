import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom';
import { GlobalButton } from "../../globalStyles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    background-color:var(--bg-primary);
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary);
    margin-top: 100px;
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    padding: 30px 50px;
    width: 500px;
    position: relative;
`

export const LoaderWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0; 
    left: 0;
    display: flex;
    width: 100%;
    align-items: center;
    align-content: center; 
    justify-content: flex-start;  
    z-index: 100000;
`
export const Loader = styled.div`
    height: 3px;
    width: 100%;
    background: #a5a4e7;

    &:before {
        content: '';
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: #1e1d52;
        height: 3px;
        width: 20%;
        animation: getWidth 1.3s linear infinite;
    }

    @keyframes getWidth {
        0% {
            left: 0%;
            width:20%;
        }
        10% {
            left: 10%;
            width: 30%;
        }
        25% {
            left: 25%;
            width: 40%;
        }
        50% {
            left: 50%;
            width: 50%;
        }
        75% {
            left: 75%;
            width: 60%;
        }
        100% { left: 100%; }
    }
`

export const Base = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color:var(--txt-primary);
    margin-bottom: 20px;
`;

export const Text = styled.p`
    color: var(--txt-secondary);
    text-align: center;
    margin-bottom: 5px;
`;

export const Link = styled(ReactRouterLink)`
    color: var(--link-color);
    text-decoration: none;
    font-size: 14px;
`;

export const SmallText = styled.small``;

export const Input = styled.input`
    width: 100%;
    padding: 0.7rem 10px;
    margin-bottom: 20px;
    font-size: 16px;
    color: var(--txt-primary);
    border: var(--primary-border);
    border-radius: 3px;
    transition: border 250ms linear;
    outline: none;
    
    &::placeholder{
        font-weight: 100;
    }

    &:last-of-type {
        margin-bottom:10px;
    }

    &:focus {
        /* outline: var(--secondary-border); */
        border: var(--secondary-border);
    }

`;

export const Error = styled.div`
    border: var(--danger-border);
    padding: 10px;
    margin-bottom: 20px;
    background-color: rgba(255, 131, 134, 0.4);
    color: rgba(255, 131, 134, 0.4);
    color: var(--txt-primary);
    font-size: 14px;
`;

export const Submit = styled(GlobalButton)`
    margin: 10px 0; 
`;