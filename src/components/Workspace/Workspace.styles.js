import styled from "styled-components/macro";
import { GlobalButton } from "../../globalStyles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    padding-top: 70px;
    color: var(--BLUE-900);
    position: relative;
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
    margin-right: 10px;
    padding: 5px 10px;
    height: 30px;
    &:last-of-type {
        margin-right: 0;
    }
`;

export const Items = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: var(--SHADOW-PRIMARY);
    margin-top: 20px;
    border-radius: 0 0 5px 5px;
    padding: 10px;
    max-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 3px solid var(--BLUE-900);
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
    color:var(--BLUE-900);

    &:hover {
        background-color:var(--BLUE-100);
        filter: hue-rotate(45deg)
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const ItemTitle = styled.h3`
    margin-left: 5px;
`;

export const ItemDate = styled.div`
    font-weight: bold;
`;