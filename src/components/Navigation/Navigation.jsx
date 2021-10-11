import { NavLink } from "react-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contacts"></NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
