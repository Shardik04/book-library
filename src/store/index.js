import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./Library";

export default configureStore({
  reducer: {
    library: libraryReducer,
  },
});
