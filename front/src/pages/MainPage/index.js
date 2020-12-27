import Login from '../../components/Login';
import LoggedPage from '../../pages/LoggedPage';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from 'react-router-dom';
import { useState } from 'react';
import LoginPage from '../LoginPage';
import { isLogged } from '../../services/LoginService';

const PrivateRoute = async ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} render={(props) => (
            isLogged
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login'
                }} />
        )} />
    )
}

const MainPage = () => {
    return (
        <Router>
            <div>
                <Route path='/login' component={LoginPage} />
                <PrivateRoute exact path='/' component={LoggedPage} />
            </div>
        </Router>
    )
}

export default MainPage
