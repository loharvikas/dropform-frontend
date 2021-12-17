import styled from "styled-components/macro";

export const Container = styled.div`
    width: 250px;
    border-right: var(--primary-border);
    height: 100vh;
    overflow-y:scroll;
    overflow-x: hidden;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
`;

export const SideBarBreak = styled.div`
    width: 250px;
    height: 100vh;
`


export const Header = styled.header`
    background-color: var(--bg-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom:  var(--primary-border);
    height: 50px;
    margin-bottom: 10px;
    position: sticky;
    top: 0;
    left:0;
    right: 0;
    z-index:999;
`;

export const Image = styled.img`
    width: 40px;
    height: 40px;
`;

export const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
    color: var(--txt-primary);
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
`;

export const ItemsTitle = styled.h3`
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
    border-bottom: var(--secondary-border);
    padding: 10px 0;
`;


export const TextLink = styled.div`
    text-decoration: none;
    color: var(${({active}) => active==='true' ? '--txt-primary' : '--txt-secondary'});
    cursor: pointer;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: left;
    padding: 10px 10px;
    border-radius: 3px;
    background-color: ${({active}) => active==='true' ? '#edecfa' : 'transparent'};

    &:hover {
        background-color: #edecfa;
        color: var(--txt-primary);
    }
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 3px;
    padding: 10px 0;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    background-color: #edecfa;
    width: 90%;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 10px;
    
    & svg {
        width: 20px;
        height:20px;
        stroke-width: 10px;
    }

    &:hover {
        filter: brightness(0.9);
    }
`;

export const TextInput = styled.input`
    width: 100%;
    font-size: 16px;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 5px 10px;
    width: 90%;
    margin: 10px auto;
    &::placeholder {
        color: lightgray;
    }
`