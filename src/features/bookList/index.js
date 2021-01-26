import { useSelector } from "react-redux";
import { allBooks } from "../../bookLibrarySlice";
import SearchBar from "../searchBar";
import Book from "../../common/book";

export default function BookList() {
  const books = useSelector(allBooks);

  return (
    <>
      <SearchBar />
      <div className="books">
        {books.map((book) => (
          <Book key={book.isbn} book={book} />
        ))}
      </div>
    </>
  );
}
