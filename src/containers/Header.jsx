import React from 'react';
import { Header } from '../components';
import { LogoSVG } from '../assets/Logo';


const HeaderContainer = () => {
    return (
        <Header main='true'>
            <Header.Frame>
                <Header.Group>
                    <Header.LogoText LogoSvg={LogoSVG}>Formstack</Header.LogoText>
                </Header.Group>
                <Header.Group>
                    <Header.LinkText>Features</Header.LinkText>
                    <Header.LinkText>About Us</Header.LinkText>
                    <Header.LinkText>Contact Us</Header.LinkText>
                    <Header.ButtonLink>Sign In</Header.ButtonLink>
                    <Header.ButtonLink primary='true'>Get started for free</Header.ButtonLink>
                </Header.Group>
            </Header.Frame>
        </Header>
    )
}

export default HeaderContainer
