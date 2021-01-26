import { useSelector } from "react-redux";
import { allBooks, searchedText } from "../../bookLibrarySlice";
import SearchBar from "../searchBar";
import Book from "../../common/book";

export default function BookList() {
  const books = useSelector(allBooks);
  const searchText = useSelector(searchedText);
  const filterdBooks = [];

  books.forEach((book) => {
    if (
      book.author.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      book.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    ) {
      filterdBooks.push(<Book key={book.isbn} book={book} />);
    }
  });

  return (
    <>
      <SearchBar />
      <div className="books">{filterdBooks}</div>
    </>
  );
}
