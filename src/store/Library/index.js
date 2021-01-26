import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "library",
  initialState: {
    books: [],
    searchText: "",
  },
  reducers: {
    addNewBook: (state, action) => {
      if (action.payload.length) {
        state.books = [...action.payload];
      } else {
        state.books = [...state.books, action.payload];
      }
    },
    addSearch: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { addNewBook } = slice.actions;
export const { addSearch } = slice.actions;

export const allBooks = (state) => state.library.books;
export const searchedText = (state) => state.library.searchText;

export default slice.reducer;
