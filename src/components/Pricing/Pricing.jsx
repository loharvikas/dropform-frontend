import React from 'react';
import { CheckSVG } from '../../assets/icons';
import { Container, Title, Text, SmallText, Button } from './Pricing.styles';

export default function Pricing({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Pricing.Title = function PricingTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Pricing.Text = function PricingText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Pricing.SmallText = function PricingSmallText({ children, ...restProps }) {
    return <SmallText {...restProps}><CheckSVG /> {children}</SmallText>
}

Pricing.Button = function PricingButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}