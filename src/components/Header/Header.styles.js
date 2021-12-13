import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    position: ${({ main }) => main==='true' ? 'fixed' : 'sticky'};
    height: ${({ main }) => main==='true' ? '70px' : '50px'};
    top: 0;
    right: 0; 
    z-index: 999;
`

export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 35px;
    padding: 10px 0;
`

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * {
        margin-right:10px;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


`

export const LogoText = styled.h1`
    margin-left:10px;
`



export const LinkText = styled(ReactRouterLink)`
    cursor: pointer;
    color: ${({ active}) => active==='true' ? '#1C1C1C' : '#939393'};
    font-weight: 500;
    text-decoration: none;

    &:hover {
        color: #1C1C1C;
    }
`

export const ButtonLink = styled.button`
    cursor: pointer;
    border: 1px solid lightgray;
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    background: transparent;
    &:hover {
        border-color: gray;
    }
    
    ${({ primary })  => primary === 'true' &&
        `
        border: 1px solid  #FF8B59;
        background-color: #FF8B59;
        color:#fff;
        font-weight: 600;
        &:hover {
            background-color: #ff763b;
            border-color: #FF8B59;
        }
        `
    }

`