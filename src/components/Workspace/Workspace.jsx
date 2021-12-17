import React from 'react';
import { Container, Frame, Group, Title, Button, Items, ItemTitle, Item, ItemDate } from './Workspace.styles' 


export default function Workspace({ children, ...restProps }) {
    return <Container {...restProps} >{ children }</Container>
}

Workspace.Frame = function WorkspaceFrame({ children, ...restProps }) {
    return <Frame {...restProps} >{ children }</Frame>
}

Workspace.Group = function WorkspaceGroup({ children, ...restProps }) {
    return <Group {...restProps} >{ children }</Group>
}

Workspace.Title = function WorkspaceTitle({ children, ...restProps }) {
    return <Title {...restProps} >{ children }</Title>
}

Workspace.Items = function WorkspaceItems({ children, ...restProps }) {
    return <Items {...restProps} >{ children }</Items>
}

Workspace.Item = function WorkspaceItem({ children, ...restProps }) {
    return <Item {...restProps} >{ children }</Item>
}

Workspace.ItemTitle = function WorkspaceItemTitle({ children, ...restProps }) {
    return <ItemTitle {...restProps} >{ children }</ItemTitle>
}

Workspace.ItemDate = function WorkspaceItemDate({ children, ...restProps }) {
    return <ItemDate {...restProps} >{ children }</ItemDate>
}

Workspace.Button = function WorkspaceButton({ children, ...restProps }) {
    return <Button {...restProps} >{ children }</Button>
}

