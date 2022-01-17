import styled from 'styled-components/macro';
import { GlobalButton } from '../../globalStyles';

export const Container = styled.div`
    color:black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    padding: 30px 20px;
    height: 550px;
    margin-top: auto;
    border-radius: 10px;
    margin-right: 10px;
    border: 2px solid var(--BLACK-999);
    background-color: var(--WHITE-999);
    
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

    @media screen and (max-width: 600px) {
        width: 100%;
    }

`;

export const Title = styled.h2`
    margin-bottom: 10px;


    @media screen and (max-width: 600px) {
        font-size: 40px;
    }
`;

export const Text = styled.p`
    color:var(--GREY-800);
    margin-bottom: 15px;
    font-weight: 400;

    span {
        font-size: 30px;
        font-weight: bold;
        color: var(--BLACK-999);
    }
`;

export const SmallText = styled.small`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    font-weight: 450;
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
    transition: border 200ms linear;

    &:hover {
        border: 2px solid var(--PRIMARY-500);
    }
`;