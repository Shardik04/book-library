import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink exact={true} to="/" activeClassName="active">
        New Book
      </NavLink>
      <NavLink to="/allbooks" activeClassName="active">
        All Books List
      </NavLink>
    </header>
  );
}
