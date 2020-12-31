import React from 'react'
import { authenticationService } from '../../../services/AuthenticationService'
import { Formik } from 'formik';
import * as S from '../Styles/style';

const RegisterComponent = props => {
    return (
        <S.Container>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    email: '',
                    nationality: '',
                }}
                onSubmit={(values) => {
                    const { username, password, email, nationality } = values
                    props.createUser(username, password, email, nationality)
                        .then(
                            response => { props.register() },
                            error => console.log(error)
                        )
                }}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Username is required'
                    } else if (values.username.length < 4) {
                        errors.username = 'Username is too short, minimum 4 chars is required'
                    }
                    if (!values.email) {
                        errors.email = 'Email address is required'
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address'
                    }
                    if (!values.password) {
                        errors.password = 'Password is required'
                    } else if (values.password.length < 6) {
                        errors.password = 'Password is too short, minimum 6 chars is required'
                    }
                    if (!values.nationality) {
                        errors.nationality = 'Nationality is required'
                    } else if (values.nationality.length > 2) {
                        errors.nationality = 'Nationality abbreviation contains 2 chars'
                    }
                    return errors
                }}>
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                }) => (
                    <S.FormContainer minHeight="650px" onSubmit={handleSubmit}>
                        <S.Label htmlFor="username">Username</S.Label>
                        <S.Input type='text' onChange={handleChange}
                            value={values.username} placeholder="Username"
                            name="username" id="username" />
                        <S.ErrorMessage>{errors.username && <S.ErrorParagraph>{errors.username}</S.ErrorParagraph>}</S.ErrorMessage>

                        <S.Label htmlFor="password">Password</S.Label>
                        <S.Input type="password" onChange={handleChange}
                            value={values.password} placeholder="Password"
                            name="password" id="password" />
                        <S.ErrorMessage>{errors.password && <S.ErrorParagraph>{errors.password}</S.ErrorParagraph>}</S.ErrorMessage>

                        <S.Label htmlFor="email">Email</S.Label>
                        <S.Input type="email" onChange={handleChange}
                            value={values.email} placeholder="Email"
                            name="email" id="email" />
                        <S.ErrorMessage>{errors.email && <S.ErrorParagraph>{errors.email}</S.ErrorParagraph>}</S.ErrorMessage>

                        <S.Label htmlFor="nationality">Nationality</S.Label>
                        <S.Input type="text" onChange={handleChange}
                            valye={values.nationality} placeholder="Nationality"
                            name="nationality" id="nationality" />
                        <S.ErrorMessage>{errors.nationality && <S.ErrorParagraph>{errors.nationality}</S.ErrorParagraph>}</S.ErrorMessage>
                        <S.ButtonContainer>
                            <S.Button type="submit">Zarejestruj</S.Button>
                            <S.Button type="button" onClick={() => props.register()}>Logowanie</S.Button>
                        </S.ButtonContainer>
                    </S.FormContainer>
                )}
            </Formik>
        </S.Container>
    )
}

export default RegisterComponent
