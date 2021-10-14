import { connect } from "react-redux";
import { logoutUser } from "../../redux/user-operations";
import { getEmail, getToken } from "../../redux/user-selectors";

function Profile({ email, token, logoutUser }) {
  function handleButtonClick() {
    logoutUser(token);
  }

  return (
    <div>
      <p>{email}</p>
      <button onClick={handleButtonClick}>Logout</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  email: getEmail(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: (token) => dispatch(logoutUser(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
