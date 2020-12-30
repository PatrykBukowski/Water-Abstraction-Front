import React from 'react';
import { Route, Router } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { history } from './helpers/History';
import { authenticationService } from './services/AuthenticationService';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import styled from 'styled-components';
import NavigationComponent from './components/NavigationComponent'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }))
  }

  logout() {
    authenticationService.logout();
    history.push('/login')
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <Container>
          {currentUser &&
            <NavigationComponent user={currentUser} logout={this.logout} />
          }
          <div>
            <PrivateRoute exact path='/' component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </div>
        </Container>
      </Router>
    )
  }
}

export default App;