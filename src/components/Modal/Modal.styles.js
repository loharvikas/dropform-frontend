import styled from 'styled-components';
import { GlobalButton } from '../../globalStyles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const Inner = styled.div`
    margin: 0 auto;
    margin-top:80px;
    background: #fff;
    position:relative;
    max-height: 600px;
    overflow: scroll;
`;

export const Header = styled.div`
    padding: 10px 20px;
    background-color: var(--bg-primary);
`;

export const Title = styled.h1`
    color:var(--txt-primary);
    font-size:24px;
`;

export const Body = styled.div`
  max-height: 450px;
  overflow: scroll;
`;

export const Text = styled.p`
    color:var(--txt-secondary);
    font-weight: 500;
`;


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

export const Button = styled(GlobalButton)`
    margin-left: 20px;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: 500;

    ${({ type }) => type === 'secondary' && `
        border:1px solid lightgray;
        color:black;
        background:#fff;
    `}
`;

export const Footer = styled.div`
    height: 80px;
    padding: 20px;
    background: rgba(0,0, 0, 0.03);
    display: flex;
    /* align-self: flex-end; */
    flex-direction: row-reverse;
`