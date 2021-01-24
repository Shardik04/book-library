import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "library",
  initialState: {
    books: [],
  },
  reducers: {
    addNewBook: (state, action) => {
      if (action.payload.length) {
        state.books = [...action.payload];
      } else {
        state.books = [...state.books, action.payload];
      }
    },
  },
});

export const { addNewBook } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const allBooks = (state) => state.library.books;

export default slice.reducer;
