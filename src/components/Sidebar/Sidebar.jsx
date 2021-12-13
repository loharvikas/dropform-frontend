import React from 'react';
import { Container, Header, Image, Title, TextLink, Button, Items, ItemsTitle, TextInput } from './Sidebar.styles';


export default function Sidebar({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>
}

Sidebar.Header =  function SidebarHeader({ children, ...restProps }) {
    return <Header {...restProps}>{ children }</Header>
}

Sidebar.Image =  function SidebarImage({ src, children, ...restProps }) {
    return <Image src={src} {...restProps}>{ children }</Image>
}


Sidebar.Title =  function SidebarTitle({ children, ...restProps }) {
    return <Title {...restProps}>{ children }</Title>
}

Sidebar.Items =  function SidebarItems({ children, ...restProps }) {
    return <Items {...restProps}>{ children }</Items>
}

Sidebar.ItemsTitle =  function SidebarItemsTitle({ children, ...restProps }) {
    return <ItemsTitle {...restProps}>{ children }</ItemsTitle>
}


Sidebar.TextLink =  function SidebarTestLink({ children, ...restProps }) {
    return <TextLink {...restProps}>{ children }</TextLink>
}


Sidebar.Button =  function SidebarButton({ children, ...restProps }) {
    return <Button {...restProps}>{ children }</Button>
}

Sidebar.TextInput =  function SidebarTextInput({ children, ...restProps }) {
    return <TextInput {...restProps} />
}