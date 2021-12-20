import React from 'react';
import { Container, Wrapper, LoaderWrapper, Loader, Base, Title, Text, Label, Link , Input, Alert, Submit} from './Form.styles';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>
}
Form.Wrapper =  function FormWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{ children }</Wrapper>
}

Form.Loader = function FormLoader() {
    return (
        <LoaderWrapper>
            <Loader />
        </LoaderWrapper>
    )
}

Form.Base =  function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{ children }</Base>
}

Form.Title =  function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{ children }</Title>
}

Form.Label =  function FormLabel({ children, ...restProps }) {
    return <Label {...restProps}>{ children }</Label>
}

Form.Text =  function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{ children }</Text>
}

Form.Link =  function FormLink({children, ...restProps }) {
    return <Link {...restProps}>{ children }</Link>
}


Form.Input =  function FormInput({ ...restProps }) {
    return <Input {...restProps} />
}

Form.Alert =  function FormError({ children, ...restProps }) {
    return <Alert {...restProps}>{ children }</Alert>
}

Form.Submit =  function FormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{ children }</Submit>
}