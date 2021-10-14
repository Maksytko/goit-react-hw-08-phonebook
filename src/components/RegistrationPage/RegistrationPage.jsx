import { useState } from "react";
import { connect } from "react-redux";
import { createUser } from "../../redux/user-operations";

function RegistrationPage({ createUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormSubmit(event) {
    event.preventDefault();

    createUser({
      name,
      email,
      password,
    });

    setName("");
    setEmail("");
    setPassword("");
  }

  function handleInputChange(event) {
    if (event.currentTarget.name === "email") {
      return setEmail(event.currentTarget.value);
    }

    if (event.currentTarget.name === "password") {
      return setPassword(event.currentTarget.value);
    }

    setName(event.currentTarget.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Create account</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createUser: ({ name, email, password }) =>
    dispatch(createUser({ name, email, password })),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);
