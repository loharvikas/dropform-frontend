import React from 'react';
import {Container, Frame, Text, Button} from './Alert.styles';

export default function Alert({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Alert.Frame = function AlertFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Alert.Text = function AlertText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Alert.Button = function AlertButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}