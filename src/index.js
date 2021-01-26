import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store/index";
import { Provider, useDispatch } from "react-redux";
import BookList from "./features/BookList";
import AddNewBook from "./features/AddNewBook";
import Header from "./features/Header";
import EditBook from "./features/EditBook";
import { fetchAllBooks } from "./services/BookFetchService";
import { addNewBook } from "./store/Library";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AddNewBook} />
        <Route path="/allbooks" component={BookList} />
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
    <div className="container">
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
