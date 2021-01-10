import React from 'react'
import { Formik } from 'formik';
import styled from 'styled-components';
import colors from '../../../utils/colors';

const M = {}
M.MainWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .9;
`
M.FormWrapper = styled.div`
    height: 600px;
    width: 1000px;
    background: ${colors.oxfordBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1000px){
        height: 100%;
        width: 100%;
    }
`
M.FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
M.Input = styled.input`
    width: 320px;
    height: 50px;
    margin: 15px;
    font-size: 32px;
    border: none;
    transition: .2s background;
    background: ${(props) => props.error[props.name] ? colors.red : colors.platinum};
    :focus{
        outline: none;
        background: ${colors.orangeWeb};
    }
    @media only screen and (max-width: 340px){
        width: calc(100% - 10px);
    }
`
M.LoginButton = styled.button`
    width: 320px;
    height: 50px;
    margin: 15px;
    border: none;
    background: ${colors.white};
    font-size: 32px;
    font-weight: bold;
    @media only screen and (max-width: 340px){
        width: calc(100% - 10px);
    }
`
M.RegisterButton = styled.p`
    margin: 15px;
    font-size: 20px;
    color: ${colors.platinum};
`

const RegisterComponent = props => {
    return (
        <M.MainWrapper>
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
                        .then(() => { props.register() })
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
                    <M.FormWrapper>
                        <M.FormContainer onSubmit={handleSubmit}>
                            <M.Input type='text' onChange={handleChange}
                                value={values.username} placeholder="Username"
                                name="username" id="username" error={errors} />

                            <M.Input type="password" onChange={handleChange}
                                value={values.password} placeholder="Password"
                                name="password" id="password" error={errors} />

                            <M.Input type="email" onChange={handleChange}
                                value={values.email} placeholder="Email"
                                name="email" id="email" error={errors} />

                            <M.Input type="text" onChange={handleChange}
                                valye={values.nationality} placeholder="Nationality"
                                name="nationality" id="nationality" error={errors} />
                            <M.LoginButton type="submit">REGISTER</M.LoginButton>
                            <M.RegisterButton type="button" onClick={() => props.register()}>LOGIN</M.RegisterButton>
                        </M.FormContainer>
                    </M.FormWrapper>
                )}
            </Formik>
        </M.MainWrapper>
    )
}

export default RegisterComponent
