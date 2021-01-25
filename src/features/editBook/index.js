import { useState } from "react";
import { FormField } from "../../common/formField";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { allBooks, addNewBook } from "../../bookLibrarySlice";

export default function EditBook() {
  const books = useSelector(allBooks);
  const { id } = useParams();
  const book = books.filter((item) => id === item.isbn)?.[0];
  //   const { title, description, total, author } = book;

  const [title, setTitle] = useState(book.title);
  const [description, setDescription] = useState(book.description);
  const [total, setTotal] = useState(book.total);
  const [author, setAuthor] = useState(book.author);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (event?.target?.name) {
      case "title":
        setTitle(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "total":
        setTotal(event.target.value);
        break;
      case "author":
        setAuthor(event.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!title || !description || !total || !author) {
      return;
    }
    // let isbn = `978159327${Math.floor(Math.random() * 100)}`;

    // const book = { title, description, total, author, isbn: id };
    let BOOKS = [...books];
    const index = BOOKS.findIndex((element) => element.isbn === id);
    console.log(index);
    console.log(BOOKS[index]);
    BOOKS[index] = { ...BOOKS[index], title, description, total, author };
    console.log(BOOKS);
    dispatch(addNewBook(BOOKS));
  };

  return (
    <form className="new-book-form" onSubmit={onSubmit}>
      <FormField
        name="title"
        type="text"
        placeholder="Please add Book title"
        onChange={handleChange}
        label="Title"
        value={title}
        required
      />
      <FormField
        name="description"
        type="text"
        placeholder="Please add Book Description"
        onChange={handleChange}
        value={description}
        label="Decription"
        required
      />
      <FormField
        name="total"
        type="number"
        min="0"
        placeholder="please add total no of books"
        onChange={handleChange}
        value={total}
        label="Total books"
        required
      />
      <FormField
        name="author"
        type="text"
        placeholder="Please add Author name"
        onChange={handleChange}
        value={author}
        label="Author"
        required
      />
      <button type="submit" label="Submit" className="button">
        Edit Book
      </button>
    </form>
  );
}
