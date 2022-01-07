import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 20px;
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
    font-weight: 500;
    transition: background 300ms linear;
    color: var(--GREY-500);
    position: relative;
    margin-right: 3px;
    cursor: pointer;
    
    &:hover {
        background-color: var(--BLUE-200) ;
        color: var(--BLUE-900);
    }


    ${({ active }) => active === 'true' && `
        color: var(--BLUE-900);
        background-color: var(--BLUE-200) ;
        &::after {
            content:'';
            position: absolute;
            bottom:-10px;
            left:0;
            right:0;
            height: 2px;
            background-color: var(--BLUE-900);
            width: 100%;
        }
    `}
`
