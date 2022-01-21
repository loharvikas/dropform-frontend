import React from 'react';
import { Footer } from '../components';
import * as ROUTES from '../constants/routes';

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link to='#'>Pricing</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.AnchorLink href="mailto: loharvikas13@dropform.co">Contact Us</Footer.AnchorLink>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link to={ROUTES.TERMS_OF_USE}>Terms of Use.</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link to={ROUTES.PRIVACY_POLICY}>Privacy Policy</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer>
    );
}