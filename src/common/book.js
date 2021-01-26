import { Link } from "react-router-dom";

export default function Book(props) {
  const { title, description, total, author, isbn } = props.book;
  const EDIT_PATH = `/${isbn}/edit`;
  return (
    <div className="book">
      <div className="book-title">{title}</div>
      <div className="book-description">{description}</div>
      <div className="book-total">
        Total No of book: <b>{total}</b>
      </div>
      <div className="book-author">Author: {author}</div>
      <div>
        <Link to={EDIT_PATH} style={{ textDecoration: "none" }}>
          Edit
        </Link>
      </div>
    </div>
  );
}
