import { useSelector } from "react-redux";
import { allBooks } from "./bookLibrarySlice";

function Book(props) {
  const { title, description, total, author } = props.book;
  return (
    <div className="book">
      <div className="book-title">{title}</div>
      <div className="book-description">{description}</div>
      <div className="book-total">
        Total No of book: <b>{total}</b>
      </div>
      <div className="book-author">Author: {author}</div>
    </div>
  );
}

export function BookLibrary() {
  const books = useSelector(allBooks);

  return books.map((book) => {
    return <Book key={book.isbn} book={book} />;
  });
}
