import { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/user-operations";

function LoginPage({ loginUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    loginUser({ email, password });

    setEmail("");
    setPassword("");
  }

  function handleInputChange(event) {
    if (event.currentTarget.name === "email") {
      return setEmail(event.currentTarget.value);
    }

    return setPassword(event.currentTarget.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: ({ email, password }) => dispatch(loginUser({ email, password })),
});

export default connect(null, mapDispatchToProps)(LoginPage);
