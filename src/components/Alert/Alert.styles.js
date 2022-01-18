import styled from 'styled-components/macro';
import { GlobalButton } from '../../globalStyles';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color: var(--TEAL-500); 
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    position: sticky;
    top:50px;
    left:0;
    right:0;
    animation-name: slideIn;
    animation-duration: 300ms;


    @keyframes slideIn {
        from {
            top:-10px;
        }
        to {
            top:50px
        }
    }
`

export const Frame = styled.div`
    max-width: 1200px;
    display:flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
`

export const Text = styled.div`
    font-weight: 500;
    font-size: 15px;
    color:#fff;
`

export const Button = styled(GlobalButton)`
    font-size: 13px;
    background-color: var(--WHITE-999);
    color: var(--BLACK-999);
    border: 2px solid var(--BLACK-999);
`;