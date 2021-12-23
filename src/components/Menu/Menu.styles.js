import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 20px;
    color: #22438c;
    border-bottom: 1px solid lightgray;
    padding-bottom: 10px;
`

export const Frame = styled.div`
    display: flex;
    margin: 0 20px;
`

export const Group = styled.div``

export const Tab = styled.div`
    padding: 5px 12px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 500;
    transition: background 300ms linear;
    color: var(--txt-secondary);
    position: relative;
    margin-right: 3px;
    
    &:hover {
        background-color: #dae1fa ;
        color:#22438c;
    }


    ${({ active }) => active === 'true' && `
        color:#22438c;
        background-color: #dae1fa ;
        &::after {
        content:'';
        position: absolute;
        bottom:-10px;
        left:0;
        right:0;
        height: 2px;
        background-color: #22438c;
        width: 100%;
    }
    `}
`
