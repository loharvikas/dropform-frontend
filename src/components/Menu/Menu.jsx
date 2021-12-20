import React from 'react';
import { Container, Frame, Group,  Tab} from './Menu.styles'

export default function Menu({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>
}

Menu.Frame = function MenuFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{ children}</Frame>
}

Menu.Group = function MenuGroup({ children, ...restProps }) {
    return <Group {...restProps}>{ children}</Group>
}

Menu.Tab = function MenuTab({ children, ...restProps }) {
    return <Tab {...restProps}>{ children}</Tab>
}