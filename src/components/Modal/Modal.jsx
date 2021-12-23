import React from 'react';
import { Container, Inner, Header, Title, Body, Text, Close, Button, Footer} from './Modal.styles';

export default function Modal({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Modal.Inner = function ModalInner({children, ...restProps}) {
    return <Inner {...restProps}>{children}</Inner>
}

Modal.Header = function ModalHeader({children, ...restProps}) {
    return <Header {...restProps}>{children}</Header>
}

Modal.Title = function ModalTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
    
Modal.Body = function ModalBody({children, ...restProps}) {
    return <Body {...restProps}>{children}</Body>
}

Modal.Text = function ModalText({...restProps}) {
    return <Text {...restProps} />
}

Modal.Close = function ModalClose({children, ...restProps}) {
    return <Close {...restProps}>{children}</Close>
}

Modal.Button = function ModalButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

Modal.Footer = function ModalFooter({children, ...restProps}) {
    return <Footer {...restProps}>{children}</Footer>
}