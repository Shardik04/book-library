import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { BookLibrary } from "./BookLibrary";
import AddNewBook from "./features/addNewBook";
import { fetchAllBooks } from "./services/bookFetchService.js";
import { addNewBook } from "./bookLibrarySlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllBooks().then((books) => {
      dispatch(addNewBook(books));
    });
  });

  return (
    <div className="books">
      <BookLibrary />
      <AddNewBook />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
