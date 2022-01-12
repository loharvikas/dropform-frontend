import styled, { createGlobalStyle } from 'styled-components/macro';
import * as STYLES from './constants/styles';

export const GlobalStyles = createGlobalStyle`
    :root {
        --FONT-SIZES-D1: 48px;
        --FONT-SIZES-D2: 40px;
        --FONT-SIZES-H1: 32px;
        --FONT-SIZES-H2: 24px;
        --FONT-SIZES-H3: 20px;
        --FONT-SIZES-C1: 16px;
        --FONT-SIZES-C2: 14px;
        --FONT-SIZES-C3: 12px;
        --FONT-SIZES-C4: 10px;
        --BLACK-100: rgba(0, 0, 0, .1);
        --BLACK-200: rgba(0, 0, 0, .2);
        --BLACK-300: rgba(0, 0, 0, .3);
        --BLACK-400: rgba(0, 0, 0, .4);
        --BLACK-500: rgba(0, 0, 0, .5);
        --BLACK-600: rgba(0, 0, 0, .6);
        --BLACK-700: rgba(0, 0, 0, .7);
        --BLACK-800: rgba(0, 0, 0, .8);
        --BLACK-999: rgba(0, 0, 0, 1);
        --WHITE-100: rgba(255, 255, 255, .1);
        --WHITE-200: rgba(255, 255, 255, .2);
        --WHITE-300: rgba(255, 255, 255, .3);
        --WHITE-400: rgba(255, 255, 255, .4);
        --WHITE-500: rgba(255, 255, 255, .5);
        --WHITE-600: rgba(255, 255, 255, .6);
        --WHITE-700: rgba(255, 255, 255, .7);
        --WHITE-800: rgba(255, 255, 255, .8);
        --WHITE-999: rgba(255, 255, 255, 1);
        --GREY-100: #F7F5F9;
        --GREY-200: #E2E2E8;
        --GREY-300: #CCCCD4;
        --GREY-400: #ABABB4;
        --GREY-500: #86868E;
        --GREY-600: #696972;
        --GREY-700: #4B4B55;
        --GREY-800: #34343D;
        --GREY-900: #29292E;
        --PRIMARY-500: rgba(99, 91, 255);
        --PRIMARY-600: #413ea9;
        --PRIMARY-700: #373385;
        --PRIMARY-800: #2d2762;
        --PRIMARY-900: #211d42;
        --PURPLE-100: #F2EEF6;
        --PURPLE-200: #E2D4EF;
        --PURPLE-300: #B59BD8;
        --PURPLE-400: #7855A5;
        --PURPLE-500: #5A2E91;
        --PURPLE-600: #401773;
        --PURPLE-700: #20054C;
        --PURPLE-800: #14012E;
        --PURPLE-900: #100024;
        --RED-100: #F7E2DF;
        --RED-200: #FCC9C2;
        --RED-300: #FF9781;
        --RED-400: #F46D4F;
        --RED-500: #E3350F;
        --RED-600: #AA280B;
        --RED-700: #7C1D0E;
        --RED-800: #4F0F04;
        --RED-900: #350B02;
        --YELLOW-100: #FFF8F2;
        --YELLOW-200: #FEF0D9;
        --YELLOW-300: #FDD9A1;
        --YELLOW-400: #FCC062;
        --YELLOW-500: #FFA800;
        --YELLOW-600: #FC871B;
        --YELLOW-700: #C36003;
        --YELLOW-800: #703600;
        --YELLOW-900: #492903;
        --TEAL-100: #E0FFF4;
        --TEAL-200: #BAF9E2;
        --TEAL-300: #88F9C9;
        --TEAL-400: #53E0AD;
        --TEAL-500: #00D387;
        --TEAL-600: #009E65;
        --TEAL-700: #006A44;
        --TEAL-800: #05492F;
        --TEAL-900: #1A352B;
        --BLUE-100: #F0F3FD;
        --BLUE-200: #D6E2FA;
        --BLUE-300: #A5BFF3;
        --BLUE-400: #6691EE;
        --BLUE-500: #396FE9;
        --BLUE-600: #2B55B1;
        --BLUE-700: #22438C;
        --BLUE-800: #172C5D;
        --BLUE-900: #021641;
        --SHADOWS-FOCUS: 0 0 0 3px var(--BLUE-200);
        --SHADOW-PRIMARY: 0px 0px 3px 1px rgba(0,0,0,0.1);
        --SHADOWS-DEPTH-01: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.08);
        --SHADOWS-DEPTH-02: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
        --TRANSITIONS-CUBIC-BEZIER: cubic-bezier(.25, .8, .25, 1);
        --TRANSITIONS-DEFAULT: 300ms cubic-bezier(.25, .8, .25, 1);
        --BORDER-PRIMARY: 1px solid var(--BLUE-900);
        --BORDER-SECONDARY: 1px solid lightgray;
        --BORDER-DANGER: 1px solid var(--RED-500);
        --BORDER-SUCCESS: 1px solid var(--TEAL-600);
    }
    
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        height: 100%;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        position: relative;
        background-color: var(--BLUE-100);
        overflow-x: hidden;
    }

    body::-webkit-scrollbar {
        width: 0.3rem;
    }

    body::-webkit-scrollbar-track {
    background: #1e1e24;
    }

    body::-webkit-scrollbar-thumb {
    background: #6649b8;
    }

    a {
        text-decoration: none;
        color: white;
    }

`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 10px;
`

export const InnerWrapper = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: ${({ direction }) => direction === 'column' ? 'column' : 'row'};
    overflow: hidden;
`

export const Break = styled.div`
    display:flex;
    flex-direction: column;
    height: 70px;
    width: 100%;
`

export const GlobalButton = styled.button`
    background-color: var(--PRIMARY-500);
    color: #fff;
    height: 40px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 550;
    border-radius: 3px;
    border: none;
    cursor: pointer;

    &:hover {
        box-shadow: 1px 1px 10px 2px rgba(0,0,0,0.1);
    }

    ${({ subType }) => subType === STYLES.BUTTON_DANGER && `
        border: var(--BORDER-DANGER);
        color: #F93154;
        background: transparent;
        transition:background linear 300ms;

    `}

    ${({ subType }) => subType === STYLES.BUTTON_LINK && `
        background: transparent;
        color: var(--PRIMARY-500);
        
        &:hover {
            box-shadow: none;
        }
    `}

    ${({ subType }) => subType === STYLES.BUTTON_SECONDARY && `
        background-color: var(--WHITE-999);
        border: var(--BORDER-SECONDARY);
        color: var(--GREY-900);
    `}
`


export const Feature = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
`


export const FeatureTitle = styled.h3`
    font-size: 20px;
    font-weight: 500;
`

export const GoogleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: none;
    background-color: var(--BLUE-900);
    color: var(--WHITE-999);
    padding: 10px 0;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 20px;

    span {
        margin-left: 5px;
    }

`

export const Loader = styled.div`
    height: 3px;
    width: 100%;
    background: #a5a4e7;

    &:before {
        content: '';
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: #1e1d52;
        height: 3px;
        width: 20%;
        animation: getWidth 1.3s linear infinite;
    }

    @keyframes getWidth {
        0% {
            left: 0%;
            width:20%;
        }
        10% {
            left: 10%;
            width: 30%;
        }
        25% {
            left: 25%;
            width: 40%;
        }
        50% {
            left: 50%;
            width: 50%;
        }
        75% {
            left: 75%;
            width: 60%;
        }
        100% { left: 100%; }
    }
`
export const LoaderWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    top: ${({ top }) => top ? top : '0'}; 
    left: 0;
    display: flex;
    width: 100%;
    align-items: center;
    align-content: center; 
    justify-content: flex-start;  
    z-index: 100000;
`