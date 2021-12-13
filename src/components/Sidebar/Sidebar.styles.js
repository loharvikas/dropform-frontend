import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    width: 250px;
    border-right: 1px solid lightgray;
    height: 100vh;
    overflow-y:scroll;
    overflow-x: hidden;
    padding: 0 10px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    height: 50px;
    margin-bottom: 10px;

`;

export const Image = styled.img`
    width: 40px;
    height: 40px;
`;

export const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemsTitle = styled.h3`
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;
    padding: 10px 0;
`;


export const TextLink = styled(ReactRouterLink)`
    text-decoration: none;
    color: #1C1C1C;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
    padding: 5px 10px;
    border-radius: 3px;
    background-color: ${({active}) => active==='true' ? ' #EAEAEA' : 'transparent'};

    &:hover {
        background-color: #EAEAEA ;
    }
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 3px;
    padding: 5px 0;
    margin-top: 10px;
    cursor: pointer;
    
    & svg {
        width: 20px;
        height:20px;
        stroke-width: 10px;
        fill: gray;
    }

    &:hover {
        filter: brightness(0.9);
    }
`;

export const TextInput = styled.input`
    width: 100%;
    font-size: 16px;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 5px 10px;
    &::placeholder {
        color: lightgray;
    }
`