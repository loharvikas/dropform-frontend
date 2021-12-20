import React from 'react';
import { Container, Base, Title, Frame, Label, Input, Text, Button, Toggle} from './SubForm.styles';

export default function SubForm({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

SubForm.Title = function SubFormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{ children }</Title>
}

SubForm.Frame = function SubFormFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{ children }</Frame>
}

SubForm.Base = function SubFormBase({ children, ...restProps }) {
    return <Base {...restProps}>{ children }</Base>
}


SubForm.Label = function SubFormLabel({ children, ...restProps }) {
    return <Label {...restProps}>{ children }</Label>
}

SubForm.Input = function SubFormInput({ children, ...restProps }) {
    return <Input {...restProps}/>
}

SubForm.Text = function SubFormText({ children, ...restProps }) {
    return <Text {...restProps}>{ children }</Text>
}

SubForm.Button = function SubFormButton({ children, ...restProps }) {
    return <Button {...restProps}>{ children}</Button>
}

SubForm.Toggle = function SubFormToggle({ children, ...restProps }) {
    return <Toggle {...restProps}>{ children}</Toggle>
}