import React, { useState } from 'react'
import LoginComponent from '../../components/LoginComponent';
import RegisterComponent from '../../components/RegisterComponent';
import { authenticationService } from '../../services/AuthenticationService';
const LoginPage = props => {
    const [register, setRegister] = useState(false)
    if (authenticationService.currentUserValue) props.history.push('/')
    const changeRegister = () => setRegister(!register)

    return (
        <div>
            {!register
                ? <LoginComponent register={changeRegister} from={props.location.state} history={props.history} />
                : <RegisterComponent register={changeRegister} />
            }
        </div>
    )
}

export default LoginPage