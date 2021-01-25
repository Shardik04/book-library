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

export const allBooks = (state) => state.library.books;

export default slice.reducer;
