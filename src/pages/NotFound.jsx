import React from 'react';
import styled from 'styled-components';
import { HeaderContainer } from '../containers'
import { Feature } from '../components';

const Section = styled.section`
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    text-align: center;
`

const NotFound = () => {
    return (
        <>
            <HeaderContainer />
            <Section>
                <Feature>
                    <Feature.Title
                        fontSize='11em'
                        lineHeight='9rem'
                        fontColor='var(--BLUE-900)'
                    >
                        404
                    </Feature.Title>
                    <Feature.Text fontSize='30px' lineHeight='30px' margin='30px 40px'>
                        Not Found.
                    </Feature.Text>
                </Feature>
            </Section>
        </>
    )
}

export default NotFound;