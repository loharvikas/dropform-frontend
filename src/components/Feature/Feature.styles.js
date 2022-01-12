import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--WHITE-999);
    width: 80%;
    border-radius: 5px;
    margin: 0 auto;
    position: relative;
    padding: 30px 50px;
    margin-top: 20px;
`;

export const Frame = styled.div``;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    &:last-of-type {
        margin-bottom: 0px;
    }
`;

export const Title = styled.h1`
    margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
    margin-bottom: 10px;
`;
export const InputBox = styled.div`
    border: var(--BORDER-SECONDARY);
    padding: 12px;
    border-radius: 3px;
    margin-bottom: 10px;
    color: var(--GREY-900);
    /* background-color: var(--BLUE-100); */
    font-weight: 500;
    cursor: pointer;
`;

export const Text = styled.p`
    margin-bottom: 20px;
    color: var(--GREY-500);
    font-weight: 500;
`;

export const Link = styled.a``;

export const Image = styled.img`
    width: 500px;
    height: 700px;
`