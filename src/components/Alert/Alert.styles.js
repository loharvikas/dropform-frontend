import styled from 'styled-components/macro';
import { GlobalButton } from '../../globalStyles';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color:#00b37e; 
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    position: absolute;
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
    display:flex;
    width: 60%;
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
    background-color: #fff;
    color:black;
`;