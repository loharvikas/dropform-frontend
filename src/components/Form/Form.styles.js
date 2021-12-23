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
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary);
    margin: 20px auto;
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    padding: 25px 50px;
    width: ${({ type }) => type==='subForm' ? '900px': '500px'};
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
    margin-bottom: 30px;
    text-align: center;
    font-size: 24px;

    ${({ type }) => type === 'subForm' && `
        font-size: 35px;
        text-align:left;
    `}
`;

export const Text = styled.p`
    color: var(--txt-secondary);
    text-align: center;
    margin-bottom: 5px;

    ${({ type }) => type==='subForm' && `
        font-weight:500;
        text-align:left;
        font-size:14px;
        margin-bottom:10px;
        margin-top:1px;
    `}
`;

export const Link = styled(ReactRouterLink)`
    color: var(--link-color);
    text-decoration: none;
    font-size: 14px;
`;

export const Label = styled.label`
    color:var(--txt-primary);
    font-weight: 500;
    margin-bottom:10px;

    ${({ type }) => type==='subForm' && `
        font-size:20px;
        margin-bottom:1px;
    `}
`

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
    
    &:last-of-type {
        margin-bottom:10px;
    }

    &:focus {
        border: var(--secondary-border);
    }

    ${({ formType }) => formType==='subForm' && `
        margin-top:10px;
        margin-bottom:0px;
    `}

`;

export const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    outline:none;
    border:1px solid lightgray;
    border-radius: 3px;
    padding: 10px;
    font-family: sans-serif;
    font-size: 16px;
    margin-top: 5px;
`

export const Error = styled.div`
    padding: 10px;
    margin-bottom: 20px;        
    font-size: 14px;
    
    ${({type}) =>  type==='Error' && `
        border: var(--danger-border);
        background-color: rgba(255, 131, 134, 0.4);
        color: var(--txt-primary);
    `}

    ${({type}) =>  type==='Success' && `
        border: var(--success-border);
        background-color: rgba(4, 185, 83 , 0.1);
        color: var(--txt-primary);
    `}
`;

export const Submit = styled(GlobalButton)`
    margin: 15px 0; 

    ${({ formType }) => formType==='subForm' && `
        font-size:14px;

        padding: 8px 20px;
        margin-top:0;
        margin-right:10px;
    `}

    ${({ subType }) => subType==='secondary' && `
        background-color:#fff;
        border:1px solid lightgray;
        color:black;
    `}
`;