import React, { useState } from 'react'
import { authenticationService } from '../../services/AuthenticationService';
import { Formik } from 'formik';

const LoginComponent = props => {
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")

    // const handleUsernameInput = ({ target: { value } }) => setUsername(value)

    // const handlePasswordInput = ({ target: { value } }) => setPassword(value)

    // const handleLoginButton = () => {
    //     authenticationService.login(username, password)
    //         .then(
    //             user => {
    //                 const { from } = props
    //                     || { from: { pathname: '/' } }
    //                 props.history.push(from)
    //             },
    //             error => console.log(error)
    //         )
    // }

    return (
        <div>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values, { setFieldError, setSubmitting }) => {
                    authenticationService.login(values.username, values.password)
                        .then(
                            user => {
                                const { from } = props
                                    || { from: { pathname: '/' } }
                                props.history.push(from)
                            },
                            error => {
                                setFieldError("server", error)
                                setSubmitting(false);
                            }
                        )
                }}
                validate={values => {
                    const errors = {};
                    if(!values.username){
                        errors.username = 'Required'
                    }
                    if(!values.password){
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
                        <input
                            type="text"
                            onChange={handleChange}
                            value={values.username}
                            placeholder="Username"
                            name="username"
                            id="username"
                        />
                        {errors.username && <p>{errors.username}</p>}
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                        />
                        {errors.password && <p>{errors.password}</p>}
                        {errors.server && <p>{errors.server}</p>}
                        <button type="submit">Zaloguj</button>
                    </form>
                )}
            </Formik>
            {/* <div>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameInput}
                />
            </div>
            <div>
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordInput}
                />
            </div>
            <div>
                <button onClick={handleLoginButton}>
                    Zaloguj
                </button>
                <button onClick={() => props.register()}>
                    Rejestracja
                </button>
            </div> */}
        </div>
    )
}

export default LoginComponent
