import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./bookLibrarySlice";

export default configureStore({
  reducer: {
    library: libraryReducer,
  },
});
