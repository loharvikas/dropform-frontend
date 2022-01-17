import styled from "styled-components";
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ backgroundColor }) => backgroundColor};
    width: 100%;
    border-radius: 5px;
    position: relative;
    margin-top: 20px;
`;

export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px) {
      flex-direction: column;
  }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-right: ${({ marginRight }) => marginRight};
    position: relative;

    &:last-of-type {
        margin-bottom: 0px;
    }

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }

    @media screen and (max-width: 500px) {
        font-size: 8px;
    }
`;

export const Title = styled.h1`
    margin-bottom: 10px;
    color: ${({ fontColor }) => fontColor};
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${(lineHeight) => lineHeight};
    user-select: none;
    letter-spacing: 0px;
    font-weight: bold;
    ::selection {
        color:pink;
    }

    @media screen and (max-width: 600px) {
        line-height: 10rem;
    }

    @media screen and (max-width: 500px) {
        line-height: 6rem;
    }
`;

export const SubTitle = styled.h2`
    margin-bottom: 10px;
    font-weight: ${({ fontWeight }) => fontWeight};
    text-align: center;
    margin: ${({ margin }) => margin};
    color:  ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
`;
export const InputBox = styled.div`
    border: var(--BORDER-SECONDARY);
    padding: 12px;
    border-radius: 3px;
    margin-bottom: 10px;
    color: var(--GREY-900);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    cursor: pointer;
`;

export const Text = styled.p`
    margin-bottom: 20px;
    color: var(--GREY-800);
    font-weight: 400;
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ lineHeight }) => lineHeight};
    margin: 30px 0px;
`;

export const Link = styled.a``;

export const Image = styled.img`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 5px;
    border: 2px solid black;
    box-shadow: 5px 5px 20px 100px rgba(0,0,0,0.1);
`

export const Video = styled.video``

export const ButtonLink = styled(ReactRouterLink)`
    max-width: 400px;
    width: 100%;
    padding: 15px 40px;
    text-align: center;
    font-weight: 500;
    background-color: var(--PRIMARY-500);
    color: var(--WHITE-999);
    border: 2px solid var(--BLACK-999);
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 5px 5px 20px 10px rgba(0,0,0,.1);
    border-radius:3px;
`;