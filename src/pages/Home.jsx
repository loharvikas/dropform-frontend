import React from 'react'
import { BillingContainer, FaqsContainer, FooterContainer, HeaderContainer } from '../containers';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Feature } from '../components';
import styled from 'styled-components';
import DashboardImage from '../assets/images/dashboard.png';
import * as ROUTES from '../constants/routes';

const Home = () => {
    return (
        <>
            <HeaderContainer />
            <Section backgroundColor='var(--PURPLE-100)'>
                <SectionWrapper>
                    <Feature backgroundColor='transparent'>
                        <Feature.Frame>
                            <Feature.Group>
                                <Feature.Title
                                    fontSize='11em'
                                    lineHeight='9rem'
                                    animateText='true'
                                >
                                    Better way to create form
                                </Feature.Title>
                                <Feature.Text fontSize='30px' lineHeight='30px' margin='30px 40px'>
                                    Dropform is next generation form endpoints for developers.
                                </Feature.Text>
                                <div style={{ width: '400px', marginTop: '30px' }}>
                                    <Feature.ButtonLink to={ROUTES.SIGN_UP}>
                                        Get started - it's free
                                    </Feature.ButtonLink>
                                </div>
                            </Feature.Group>
                        </Feature.Frame>
                    </Feature>
                </SectionWrapper>
            </Section>
            <Section backgroundColor='var(--PURPLE-900)'>
                <SectionWrapper>
                    <Feature>
                        <Feature.Image src={DashboardImage} />
                    </Feature>
                </SectionWrapper>
            </Section>
            <Section backgroundColor='var(--YELLOW-200)'>
                <SectionWrapper >
                    <Feature>
                        <Feature.Title fontSize='80px' lineHeight='70px' text-align='center' fontColor='var(--BLUE-900)'>
                            Dropform lets you create forms in minutes
                        </Feature.Title>
                        <Feature.SubTitle text-align='center' fontWeight='400' margin='30px 50px'>
                            You can build your own or use one of the many pre-built options that work immediately on any device or browser. You won't need to spend time learning a new library, and no libraries are required to get started.
                        </Feature.SubTitle>
                    </Feature>
                    <IFrame />
                </SectionWrapper>
            </Section >
            <Section backgroundColor='var(--BLACK-999)'>
                <SectionWrapper>
                    <Feature.Title fontSize='80px' lineHeight='70px' text-align='center' fontColor='var(--RED-100)'>
                        Pricing & Features
                    </Feature.Title>
                    <br />
                    <br />
                    <BillingContainer />
                </SectionWrapper>
            </Section>
            <Section backgroundColor='var(--PURPLE-100)'>
                <SectionWrapper>
                    <FaqsContainer />
                    <Feature backgroundColor='var(--PRIMARY-500)'>
                        <div style={{ margin: '70px' }}>
                            <Feature.Frame>
                                <Feature.SubTitle color='var(--WHITE-999)' fontSize='30px'>
                                    Ready to create endpoints for your form?
                                </Feature.SubTitle>
                                <Button height='50px' to={ROUTES.SIGN_UP}>
                                    Start creating for free
                                </Button>
                            </Feature.Frame>
                        </div>
                    </Feature>
                </SectionWrapper>
            </Section>
            <div style={{ backgroundColor: 'var(--BLACK-999)' }}>
                <div>
                    <FooterContainer />
                </div>
            </div>
        </>
    )
}

const IFrame = () => (
    <div>
        <iframe
            src="https://codesandbox.io/embed/dropform-example-df2v5?fontsize=14&hidenavigation=1&theme=dark"
            style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
            title="Dropform Example"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
    </div>
)
const Section = styled.section`
    width: 100vw;
    min-height: calc(100vh - 70px);
    padding: ${({ padding }) => padding};
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
    position: relative;
`

const SectionWrapper = styled.div`
    width: 75%;
    margin: 50px auto;
    padding: 0;
    position: relative;
    @media screen and (max-width: 1000px) {
        width: 80%;
    }

    @media screen and (max-width: 800px) {
        width: 90%;
    }

    @media screen and (max-width: 650px) {
        width: 95%;
        margin: 20px auto;
    }
`

const Button = styled(ReactRouterLink)`
    width: 100%;
    max-width: 200px;
    padding: 15px 0;
    text-align: center;
    font-weight: 500;
    background-color: var(--PURPLE-100);
    color: var(--PRIMARY-500);
    border: none;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 5px 5px 20px 10px rgba(0,0,0,.1);
    border-radius:3px;
`

export default Home;
