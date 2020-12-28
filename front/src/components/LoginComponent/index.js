import React, { useState } from 'react'
import { authenticationService } from '../../services/AuthenticationService';
const LoginComponent = props => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameInput = ({ target: { value } }) => setUsername(value)

    const handlePasswordInput = ({ target: { value } }) => setPassword(value)

    const handleLoginButton = () => {
        authenticationService.login(username, password)
            .then(
                user => {
                    const { from } = props
                        || { from: { pathname: '/' } }
                    props.history.push(from)
                },
                error => console.log(error)
            )
    }

    return (
        <div>
            <div>
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
            </div>
        </div>
    )
}

export default LoginComponent
