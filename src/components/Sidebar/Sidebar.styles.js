import styled from "styled-components/macro";
import { NavLink as ReactRouterNavLink } from 'react-router-dom';

export const Container = styled.div`
    width: 250px;
    height: 100vh;
    border-right: var(--BORDER-SECONDARY);
    height: 100vh;
    overflow-y:scroll;
    overflow-x: hidden;
    text-align: center;
    background-color: #fff;
    position: fixed;
    left:0;
    top:0;
    bottom:0;
`;

export const SideBarBreak = styled.div`
    width: 302px;
    height: 100vh;
`

export const Header = styled.header`
    width: inherit;
    background-color: var(--WHITE-999);
    display: flex;
    align-items: center;
    padding-left: 5px;
    border-bottom:  var(--BORDER-SECONDARY);
    height: 50px;
    position: sticky;
    top: 0;
    left:0;
    right: 0;
    z-index:999;
`;

export const Footer = styled.footer`
    background-color: var(--WHITE-999);
    display: flex;
    align-items: center;
    justify-content: center;
    border-top:  var(--BORDER-SECONDARY);
    border-right: var(--BORDER-SECONDARY);
    padding:0 10px;
    height: 50px;
    position: fixed;
    bottom: 0;
    left:0;
    right: 0;
    z-index:999;
    width: inherit;
`;

export const Image = styled.img`
    width: 40px;
    height: 40px;
`;

export const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
    color: var(--BLUE-900);
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
`;

export const ItemsTitle = styled.h3`
    font-weight: 600;
    font-size: 20px;
    text-transform: capitalize;
    color: var(--BLUE-900);
    border-radius: 5px;
`;


export const TextLink = styled(ReactRouterNavLink)`
    text-decoration: none;
    color: var(--GREY-500);
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 10px;
    text-align: left;
    padding: 10px 10px;
    border-radius: 3px;
    background-color: transparent;

    &:hover {
        background-color: var(--BLUE-200);
        color:var(--BLUE-900);
    }

    &.active {
       background-color: var(--BLUE-200);
       color:var(--BLUE-900);
    }
`;

export const Button = styled.button`
    border: none;
    background-color:  transparent;
    cursor: pointer;
`;

