import React from 'react'
import { authenticationService } from '../../services/AuthenticationService';
import { Formik } from 'formik';

const LoginComponent = props => {
    return (
        <div>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values) => {
                    authenticationService.login(values.username, values.password)
                        .then(
                            user => {
                                const { from } = props
                                    || { from: { pathname: '/' } }
                                props.history.push(from)
                            }, error => { }
                        )
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
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input type="text" onChange={handleChange}
                            value={values.username} placeholder="Username"
                            name="username" id="username" />
                        {errors.username && <p>{errors.username}</p>}
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"
                            onChange={handleChange} value={values.password} />
                        {errors.password && <p>{errors.password}</p>}
                        <button type="submit">Zaloguj</button>
                        <button type="button" onClick={() => props.register()}>Rejestracja</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default LoginComponent
