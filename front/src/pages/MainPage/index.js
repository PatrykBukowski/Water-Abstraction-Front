import Login from '../../components/Login';
import Public from '../../components/Public';
import Protected from '../../components/Protected';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated
        ? <p>
            Welcome! <button onClick={() => {
                fakeAuth.signout(() => history.push('/'))
            }}>Sign out</button>
        </p>
        : <p>You are not logged in.</p>
))

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log(fakeAuth.isAuthenticated)
    return <Route {...rest} render={props => {
        fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    }} />
}

const MainPage = () => {
    return (
        <Router>
            <div>
                <AuthButton />

                <ul>
                    <li><Link to="/public">Public Page</Link></li>
                    <li><Link to="/protected">Protected Page</Link></li>
                </ul>

                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Router>
    )
}

export default MainPage
