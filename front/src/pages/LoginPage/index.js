import React, { useState } from 'react'
import { auth } from '../../services/LoginService';

const LoginPage = props => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginOnChange = ({ target: { value } }) => setLogin(value)
    const handlePasswordOnChange = ({ target: { value } }) => setPassword(value)
    const handleButtonOnClick = () => auth(login, password, props.checkLogin())

    return (
        <div>
            <input placeholder='login'
                onChange={handleLoginOnChange}
                value={login} />
            <br />
            <input placeholder='password'
                type='password'
                onChange={handlePasswordOnChange}
                value={password} />
            <br />
            <button onClick={handleButtonOnClick}>Zaloguj</button>
        </div>
    )
}

export default LoginPage
