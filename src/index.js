import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { BookLibrary } from "./BookLibrary";
import AddNewBook from "./features/addNewBook";
import Header from "./features/header";
import EditBook from "./features/editBook";
import { fetchAllBooks } from "./services/bookFetchService.js";
import { addNewBook } from "./bookLibrarySlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AddNewBook} />
        <Route path="/allbooks" component={BookLibrary} />
        <Route path="/:id/edit" component={EditBook} />
      </Switch>
    </Router>
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllBooks().then((books) => {
      dispatch(addNewBook(books));
    });
  });

  return (
    <div className="books">
      <Routing />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
