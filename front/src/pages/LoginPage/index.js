import React, { useState } from 'react'
import LoginComponent from '../../components/HomeComponents/LoginComponent';
import RegisterComponent from '../../components/HomeComponents/RegisterComponent';
import { authenticationService } from '../../services/AuthenticationService';

const LoginPage = ({ history, location: { state } }) => {
    const [register, setRegister] = useState(false)
    const changeRegister = () => setRegister(!register)

    if (authenticationService.currentUserValue) history.push('/')

    return (
        <div>
            {!register
                ? <LoginComponent 
                login={authenticationService.login} 
                register={changeRegister} 
                from={state} 
                history={history} />
                : <RegisterComponent createUser={authenticationService.register} register={changeRegister} />
            }
        </div>
    )
}

export default LoginPage