import React from 'react'
import { authenticationService } from '../../services/AuthenticationService'
import { Formik } from 'formik';

const RegisterComponent = ({ register }) => {
    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    email: '',
                    nationality: '',
                }}
                onSubmit={(values) => {
                    const { username, password, email, nationality } = values
                    authenticationService.register(username, password, email, nationality)
                        .then(
                            response => { register() },
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
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input type='text' onChange={handleChange}
                            value={values.username} placeholder="Username"
                            name="username" id="username" />
                        {errors.username && <span>{errors.username}</span>}

                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={handleChange}
                            value={values.password} placeholder="Password"
                            name="password" id="password" />
                        {errors.password && <span>{errors.password}</span>}

                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleChange}
                            value={values.email} placeholder="Email"
                            name="email" id="email" />
                        {errors.email && <span>{errors.email}</span>}

                        <label htmlFor="nationality">Nationality</label>
                        <input type="text" onChange={handleChange}
                            valye={values.nationality} placeholder="Nationality"
                            name="nationality" id="nationality" />
                        {errors.nationality && <span>{errors.nationality}</span>}
                        <button type="submit">Zarejestruj</button>
                        <button type="button" onClick={() => register()}>Logowanie</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterComponent
