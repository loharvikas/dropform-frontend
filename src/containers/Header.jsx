import React from 'react';
import { Header } from '../components';
import { LogoSVG } from '../assets/Logo';
import * as ROUTES from '../constants/routes'


const HeaderContainer = () => {
    return (
        <Header main='true'>
            <Header.Frame>
                <Header.Group>
                    <Header.LogoText LogoSvg={LogoSVG} to={ROUTES.HOME}>Formstack</Header.LogoText>
                </Header.Group>
                <Header.Group>
                    <Header.LinkText to='#'>Features</Header.LinkText>
                    <Header.LinkText to='#'>About Us</Header.LinkText>
                    <Header.LinkText to='#'>Contact Us</Header.LinkText>
                    <Header.ButtonLink to={ROUTES.SIGN_IN}primary='false'>Sign In</Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.SIGN_UP}primary='true'>Get started for free</Header.ButtonLink>
                </Header.Group>
            </Header.Frame>
        </Header>
    )
}

export default HeaderContainer
