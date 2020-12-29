import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { history } from './helpers/History';
import { authenticationService } from './services/AuthenticationService';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x}))
  }

  componentWillUnmount(){
    authenticationService.currentUser.abort();
  }

  logout() {
    authenticationService.logout();
    history.push('/login')
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
      <div>
        {currentUser &&
          <nav>
            <div>
              <a onClick={this.logout}>Logout</a>
            </div>
          </nav>
        }
        <div>
          <div>
            <div>
              <div>
                <PrivateRoute exact path='/' component={HomePage} />
                <Route path="/login" component={LoginPage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
    )
  }
}

export default App ;