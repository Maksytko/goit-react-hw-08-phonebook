import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getIsLoggedIn } from "../../redux/user-selectors";

function PrivateRoute({ isLoggedIn, children, ...routeProps }) {
  return (
    <Route {...routeProps}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedIn(state),
});
export default connect(mapStateToProps)(PrivateRoute);
