import React from 'react';
import { Container, Frame, Group, LogoText, LinkText, ButtonLink, LogoContainer } from './Header.styles';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps }>{ children }</Container>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps }>{ children }</Frame>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps }>{ children }</Group>
}

Header.LogoText = function HeaderLogoText({LogoSvg, children, ...restProps }) {
    return (
        <LogoContainer>
            <LogoSvg />
            <LogoText {...restProps }>{ children }</LogoText>
        </LogoContainer>
    )
}

Header.LinkText = function HeaderLinkText({ children, ...restProps }) {
    return <LinkText {...restProps }>{ children }</LinkText>
}


Header.ButtonLink = function HeaderButtonLink({ primary, children, ...restProps }) {
    return <ButtonLink primary={primary} {...restProps }>{ children }</ButtonLink>
}