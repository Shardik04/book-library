import { Link } from "react-router-dom";

export default function header() {
  return (
    <header>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li style={{ padding: "10px 5px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Add New Book
          </Link>
        </li>
        <li style={{ padding: "10px 5px" }}>
          <Link to="/allbooks" style={{ textDecoration: "none" }}>
            All Books
          </Link>
        </li>
      </ul>
    </header>
  );
}
