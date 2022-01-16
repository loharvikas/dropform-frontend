import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 80px;
  line-height: 1.1;
  margin: 0 20px;
  margin-top: 0;
  margin-bottom: 8px;
  color: var(--PRIMARY-500);
  text-align: center;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Item = styled.div`
  color: var(--BLUE-900);
  margin: auto;
  margin-bottom: 10px;
  max-width: 728px;
  width: 100%;
  border-top: 1px solid var(--GREY-300);
  
  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }

  svg {
      fill: var(--BLUE-700);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 23px;
  font-weight: 500;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;
  
  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;
    @media (max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  font-size: 18px;
  font-weight: normal;
  line-height: normal;
  background: transparent;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  padding: 0px 30px;
  color: var(--GREY-700);

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }
  
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;