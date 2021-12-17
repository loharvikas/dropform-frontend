import styled from "styled-components/macro";
import { GlobalButton } from "../../globalStyles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    color: var(--txt-primary);
`;

export const Frame = styled.div`
    display:flex;
    justify-content: space-between;
`

export const Group = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const Title = styled.h1``;

export const Button = styled(GlobalButton)`
    margin-left: 10px;
    padding: 8px 10px;
    background-color:var(${({ danger }) => danger==='true' ? '--bg-danger' : '--btn-color-2'});
    border: var(${({ danger }) => danger==='true' ? '--danger-border' : 'none'});
    :last-of-type {
        margin-right: 0;
    }
    color: ${({ danger }) => danger==='true' ? 'red' : '#fff'};
    &:hover {
        filter: brightness(150%);
    }
`;

export const Items = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: var(--box-shadow);
    margin-top: 20px;
    background-color: var(--txt-primary);
    color: #ffffff;
    border-radius: 5px;
    padding: 10px;
    max-height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;


    &::-webkit-scrollbar {
        width: 0.3rem;
    }

    &::-webkit-scrollbar-track {
    background: #1e1e24;
    }

    &::-webkit-scrollbar-thumb {
    background: #6649b8;
    }
`;

export const Item = styled.div`
    width: 100%;
    padding: 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    transition: background 300ms linear;
    border-radius: 5px;
    margin-bottom: 10px;

    &:hover {
        background-color:#F2FDFA;
        color: var(--txt-primary);
    }

    &::last-of-type {
        margin-bottom: 0;
    }
`;

export const ItemTitle = styled.h3`
    margin-left: 5px;
`;

export const ItemDate = styled.div``;