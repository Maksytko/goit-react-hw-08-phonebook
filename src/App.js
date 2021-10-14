import "./App.css";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header";
import ContactsPage from "./components/ContactsPage/ContactsPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Profile from "./components/Profile/Profile";
import { connect } from "react-redux";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import { getIsLoggedIn } from "./redux/user-selectors";

function App({ isLoggedIn }) {
  return (
    <div className="App">
      <Header>
        <>
          {!isLoggedIn ? (
            <ul>
              <li>
                <Link to="/login">Sign in</Link>
              </li>
              <li>
                <Link to="/register">Sign up</Link>
              </li>
            </ul>
          ) : (
            <Profile />
          )}
        </>
      </Header>
      <PrivateRoute path="/contacts">
        <ContactsPage />
      </PrivateRoute>
      <PublicRoute path="/login" restricted>
        <LoginPage />
      </PublicRoute>
      <PublicRoute path="/register" restricted>
        <RegistrationPage />
      </PublicRoute>
      <PublicRoute path="/" exact restricted>
        <h1>Welcome</h1>
      </PublicRoute>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedIn(state),
});

export default connect(mapStateToProps)(App);
