import React from 'react';
import { Header } from '../components';
import { LogoSVG } from '../assets/Logo';
import * as ROUTES from '../constants/routes';
import * as STYLES from '../constants/styles';


const HeaderContainer = () => {
    return (
        <Header main='true'>
            <Header.Frame>
                <Header.Group>
                    <Header.LogoText LogoSvg={LogoSVG} to={ROUTES.HOME}>DropForm</Header.LogoText>
                </Header.Group>
                <Header.Group>
                    <Header.ButtonLink to={ROUTES.SIGN_IN} subType={STYLES.BUTTON_LINK}>Sign In</Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.SIGN_UP} subType={STYLES.BUTTON_PRIMARY}>Get started for free</Header.ButtonLink>
                </Header.Group>
            </Header.Frame>
        </Header>
    )
}

export default HeaderContainer
