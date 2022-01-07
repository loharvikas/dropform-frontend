import styled from 'styled-components/macro';
import { GlobalButton } from '../../globalStyles';

export const Container = styled.div`
    color:black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 500px;
    padding: 30px 20px;
    height: 550px;
    margin-top: auto;
    border-radius: 15px;
    background-color: var(--WHITE-999);
    margin-right: 10px;

    &:last-of-type {
        margin-right: 0px;
    }

    &:nth-child(3) {
        background: var(--PRIMARY-500);
        color: var(--WHITE-999);
        
        button {
            background-color: var(--YELLOW-400);
            color: var(--PRIMARY-500);
        }

        p {
            color: var(--WHITE-999);
        }

        span {
            color: var(--WHITE-999);
        }
    }

    &:hover {
        box-shadow: 1px 1px 100px 1px rgba(0,0,0,0.1);
    }
`;

export const Title = styled.h3`
    margin-bottom: 10px;
`;

export const Text = styled.p`
    color:var(--GREY-500);
    margin-bottom: 15px;
    font-weight: 500;

    span {
        font-size: 30px;
        font-weight: bold;
        color: var(--BLACK-999);
    }
`;

export const SmallText = styled.small`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    svg {
        margin-right: 5px;
    }
`;

export const Button = styled(GlobalButton)`
    width: 100%;
    background-color: transparent;
    color: var(--BLACK-999);
    border: 2px solid var(--BLACK-999);
    font-weight: bold;
`;