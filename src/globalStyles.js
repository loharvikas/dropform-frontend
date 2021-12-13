import styled, { createGlobalStyle } from 'styled-components/macro'

export const  GlobalStyles = createGlobalStyle`
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
    }
`


export const GlobalWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    margin: 1rem auto;
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