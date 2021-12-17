import React from 'react';
import { Container, Frame, Group, LogoText, LinkText, ButtonLink, LogoContainer } from './Header.styles';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps }>{ children }</Container>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps }>{ children }</Frame>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps }>{ children }</Group>
}

Header.LogoText = function HeaderLogoText({to, LogoSvg, children, ...restProps }) {
    return (
        <LogoContainer to={to}>
            <LogoSvg />
            <LogoText {...restProps }>{ children }</LogoText>
        </LogoContainer>
    )
}

Header.LinkText = function HeaderLinkText({ children, ...restProps }) {
    return <LinkText {...restProps }>{ children }</LinkText>
}


Header.ButtonLink = function HeaderButtonLink({ to, primary, children, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <ButtonLink primary={primary} {...restProps }>{ children }</ButtonLink>
        </ReactRouterLink>
    )
}