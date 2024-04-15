import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import searchReducer from "../features/searchSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
  },
});

export default store;
