import React from 'react'
import { Formik } from 'formik';
import * as S from '../Styles/style'

const LoginComponent = props => {
    return (
        <S.Container>
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
                    <S.FormContainer onSubmit={handleSubmit}>
                        <S.Label htmlFor="username">Username</S.Label>
                        <S.Input type="text" onChange={handleChange}
                            value={values.username} placeholder="Username"
                            name="username" id="username" />
                        <S.ErrorMessage>{errors.username && <S.ErrorParagraph>{errors.username}</S.ErrorParagraph>}</S.ErrorMessage>
                        <S.Label htmlFor="password">Password</S.Label>
                        <S.Input type="password" name="password"
                            onChange={handleChange} value={values.password} placeholder="Password" />
                        <S.ErrorMessage>{errors.password && <S.ErrorParagraph>{errors.password}</S.ErrorParagraph>}</S.ErrorMessage>
                        <S.ButtonContainer>
                            <S.Button type="submit">Zaloguj</S.Button>
                            <S.Button type="button" onClick={() => props.register()}>Rejestracja</S.Button>
                        </S.ButtonContainer>
                    </S.FormContainer>
                )}
            </Formik>
        </S.Container>
    )
}

export default LoginComponent
