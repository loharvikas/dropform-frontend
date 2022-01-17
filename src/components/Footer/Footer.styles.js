import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin:auto;
  max-width: 500px;
  flex-direction: column;
  padding-top: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
  }
`;

export const Link = styled(ReactRouterLink)`
  color: var(--WHITE-999);
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;