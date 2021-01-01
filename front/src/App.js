import { Route, Router } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { history } from './helpers/History';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router history={history}>
      <>
        <PrivateRoute exact path='/' component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </>
    </Router>
  )

}

export default App;