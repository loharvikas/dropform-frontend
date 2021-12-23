import styled from "styled-components/macro";
import { GlobalButton } from "../../globalStyles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
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

    background-color:var(--btn-color-2);
    border: 1px solid var(--btn-color-2);
    :last-of-type {
        margin-right: 0;
    }
    color: #fff;
    transition: background 300ms linear;

    &:hover{
        background-color: var(--bg-primary);
        color: var(--btn-color-2);
        border: 1px solid var(--btn-color-2);
        filter: none;
    }

    ${({ danger }) => danger === 'true' && `
        background:transparent;
        border: var(--danger-border);
        color: red;

        &:hover {
            background-color: red;
            color: #fff;
            border: var(--danger-border);
        }
    `
    }
`;

export const Items = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: var(--box-shadow);
    margin-top: 20px;
    border-radius: 0 0 5px 5px;
    padding: 10px;
    max-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 3px solid var(--txt-primary);
`;

export const Item = styled.div`
    width: 100%;
    padding: 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    transition: background 200ms linear;
    border-radius: 5px;
    margin-bottom: 10px;
    color:var(--txt-primary);

    &:hover {
        background-color:#F7F5F9;
        filter: hue-rotate(45deg)
    }

    &::last-of-type {
        margin-bottom: 0;
    }
`;

export const ItemTitle = styled.h3`
    margin-left: 5px;
`;

export const ItemDate = styled.div``;