import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getIsLoggedIn } from "../../redux/user-selectors";

function PublicRoute({
  isLoggedIn,
  children,
  restricted = false,
  ...routeProps
}) {
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedIn(state),
});

export default connect(mapStateToProps)(PublicRoute);
