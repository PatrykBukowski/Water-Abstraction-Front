import React, { useState, useEffect } from 'react';
import { Route, Router } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { history } from './helpers/History';
import { authenticationService } from './services/AuthenticationService';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import styled from 'styled-components';
import NavigationComponent from './components/NavigationComponent'
import colors from './utils/colors';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${colors.honeydew};
`

const App = () => {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    authenticationService.currentUser.subscribe(val => setCurrentUser(val))
  }, [])

  const logout = () => {
    authenticationService.logout()
    history.push('/login')
  }

  return (
    <Router history={history}>
      <Container>
        {currentUser &&
          <NavigationComponent user={currentUser} logout={logout} />
        }
        <div>
          <PrivateRoute exact path='/' component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Container>
    </Router>
  )

}

export default App;