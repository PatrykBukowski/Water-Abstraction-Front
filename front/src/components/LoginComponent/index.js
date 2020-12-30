import React from 'react'
import { Formik } from 'formik';
import {
    Container,
    FormContainer,
    ErrorMessage,
    ErrorParagraph,
    Label,
    Input,
    Button,
    ButtonContainer,
} from './style'

const LoginComponent = props => {
    return (
        <Container>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values) => {
                    props.login(values.username, values.password)
                        .then(
                            user => {
                                const { from } = props
                                    || { from: { pathname: '/' } }
                                props.history.push(from)
                            })
                }}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Required'
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    }
                    return errors;
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                }) => (
                    <FormContainer onSubmit={handleSubmit}>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" onChange={handleChange}
                            value={values.username} placeholder="Username"
                            name="username" id="username" />
                        <ErrorMessage>{errors.username && <ErrorParagraph>{errors.username}</ErrorParagraph>}</ErrorMessage>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" name="password"
                            onChange={handleChange} value={values.password} />
                        <ErrorMessage> {errors.password && <ErrorParagraph>{errors.password}</ErrorParagraph>}</ErrorMessage>
                        <ButtonContainer>
                            <Button type="submit">Zaloguj</Button>
                            <Button type="button" onClick={() => props.register()}>Rejestracja</Button>
                        </ButtonContainer>
                    </FormContainer>
                )}
            </Formik>
        </Container>
    )
}

export default LoginComponent
