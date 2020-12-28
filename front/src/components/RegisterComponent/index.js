import React, { useState } from 'react'
import { authenticationService } from '../../services/AuthenticationService'

const RegisterComponent = ({ register }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [nationality, setNationality] = useState("")

    const handleUsername = ({ target: { value } }) => setUsername(value)
    const handlePassword = ({ target: { value } }) => setPassword(value)
    const handleEmail = ({ target: { value } }) => setEmail(value)
    const handleNationality = ({ target: { value } }) => setNationality(value)

    const handleRegister = () => {
        authenticationService.register(username, password, email, nationality)
            .then(
                response => { register() },
                error => console.log(error)
            )
    }

    return (
        <div>
            <div>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={handleUsername}
                />
            </div>
            <div>
                <input
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                />
            </div>
            <div>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                />
            </div>
            <div>
                <input
                    placeholder="Nationality"
                    value={nationality}
                    onChange={handleNationality}
                />
            </div>
            <div>
                <button onClick={handleRegister}>
                    Zarejestruj
                </button>
                <button onClick={() => register()}>
                    Zogowanie
                </button>
            </div>
        </div>
    )
}

export default RegisterComponent
