import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { GlobalButton } from "../../globalStyles";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: var(--primary-border);
    background-color: var(--bg-secondary);
    position: sticky;
    height: ${({ main }) => main==='true' ? '70px' : '50px'};
    top: 0;
    right: 0;
    z-index: 999;
`

export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 55px;
    padding: 12px 0;
    height: 100%;

    @media only screen and (max-width: 800px) {
        margin: 0 30px;
    }
`

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * {
        margin-right:10px;
    }
`

export const LogoContainer = styled(ReactRouterLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

export const LogoText = styled.h1`
    margin-left:10px;
    color: var(--txt-primary);
    font-size: 20px;
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

export const ButtonLink = styled(GlobalButton)`
    
    &:hover {
        box-shadow: var(--box-shadow);
    }

    ${({ primary })  => primary === 'false' &&
        `
            background: transparent;
            color: var(--link-color);
        }
        &:hover {
            box-shadow: none;
        }
        `
    }
`