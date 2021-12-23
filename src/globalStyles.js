import styled, { createGlobalStyle } from 'styled-components/macro'

export const  GlobalStyles = createGlobalStyle`
    :root {
        --bg-primary: #f0f3fd;
        --bg-secondary: #fff;
        --bg-dashboard: #edecfa;
        --bg-danger: #F9F9F9;
        --bg-type: lightgray;
        --txt-primary: #0e1952;
        --txt-secondary: #939393;
        --link-color: #4B4ACF;
        --btn-color-1: #4B4ACF;
        --btn-color-2: #1e1e24;
        --btn-color-3: #A6BFF3
        --box-shadow:0px 0px 3px 1px rgba(0,0,0,0.1);
        --primary-border: 1px solid lightgray;
        --secondary-border: 1px solid #4B4ACF;
        --danger-border: 1px solid  #F93154;
        --success-border: 1px solid #00B74A;
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
        background-color: var(--bg-primary);
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


export const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 10px;
`

export const AppWrapper = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: ${({ direction }) => direction==='column' ? 'column' : 'row'};
    overflow: hidden;
`

export const Break = styled.div`
    display:flex;
    flex-direction: column;
    height: 70px;
    width: 100%;
`

export const GlobalButton = styled.button`
    padding: 12px 10px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    background-color: var(--btn-color-1);
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
    border: none;

    &:hover {
        filter: brightness(0.9)
    }

    ${({ subtype }) => subtype === 'danger' && `
        border: var(--danger-border);
        color: #F93154;
        background:transparent;
        transition:background linear 300ms;

        &:hover {
            color:#fff;
            background:#F93154;
        }
    `}
`


export const OverLay = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    z-index: 1000;
    top: 30px;
    animation-name: slidein;
    animation-timing-function:linear;
    animation-duration: 200ms;
    animation-fill-mode:backwards;

    @keyframes slidein {
        from {
            top:-30px;
        }
        to {
            top: 30px;
        }
    }
`

export const Close = styled.button`
  position: absolute;
  top:10px;
  right: 10px;
  width: 22px;
  height: 22px;
  opacity: 0.5;
  background: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  } 
`;


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