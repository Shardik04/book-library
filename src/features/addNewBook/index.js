import { useState } from "react";
import { FormField } from "../../common/FormField";
import { useDispatch } from "react-redux";
import { addNewBook } from "../../store/Library";

export default function AddNewBook() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState(0);
  const [author, setAuthor] = useState("");
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
    let isbn = `978159327${Math.floor(Math.random() * 100)}`;

    const book = { title, description, total, author, isbn };
    dispatch(addNewBook(book));
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
        Add New Book
      </button>
    </form>
  );
}
