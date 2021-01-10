import { Route, Router } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { history } from "./helpers/History";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import backgroundVideo from "assets/water.mp4";

const App = () => {
  return (
    <>
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Router history={history}>
        <>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </>
      </Router>
    </>
  );
};

export default App;
