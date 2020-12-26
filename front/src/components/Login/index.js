import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

const Login = props => {
    const [redirect, setRedirect] = useState(false);
    const { from } = props.location.state || { from: { pathname: '/' } }

    const login = () => {
        props.auth.authenticate(() => {
            setRedirect(true)
        })
    }

    if (redirect === true) {
        return <Redirect to={from} />
    }

    return (
        <div>
            <p>You must log in to view the page</p>
            <button onClick={login}>Log in</button>
        </div>
    )
}

export default Login
