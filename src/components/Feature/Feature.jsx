import React from 'react';
import { Container, Title, InputBox, Link, Text, Frame, Group, Image, SubTitle, Video, ButtonLink } from './Feature.styles';

export default function Feature({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}


Feature.Frame = function FeatureFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Feature.Group = function FeatureGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}


Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Feature.InputBox = function FeatureInputBox({ children, ...restProps }) {
    return <InputBox {...restProps}>{children}</InputBox>
}


Feature.Image = function FeatureImage({ ...restProps }) {
    return <Image {...restProps} />
}

Feature.Video = function FeatureVideo({ children, ...restProps }) {
    return <Video {...restProps}>{children}</Video>
}


Feature.Link = function FeatureLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}


Feature.Text = function FeatureText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}


Feature.ButtonLink = function FeatureButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}
