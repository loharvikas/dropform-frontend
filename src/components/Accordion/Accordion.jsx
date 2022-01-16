import React, { useState, useContext, createContext } from 'react';
import { OpenSVG, CloseSVG } from '../../assets/icons';
import { Container, Item, Title, Frame, Header, Body } from './Accordion.styles';

const ToggleContext = createContext();

export default function Accordian({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Accordian.Frame = function AccordianFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordian.Title = function AccordianTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordian.Item = function AccordianItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )

}

Accordian.Header = function AccordianHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <CloseSVG />
            ) : (
                <OpenSVG />
            )
            }
        </Header>
    )
}

Accordian.Body = function AccordianBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext)

    return (
        <Body className={toggleShow ? 'open' : 'closed'}{...restProps}>{children}</Body>
    )
}