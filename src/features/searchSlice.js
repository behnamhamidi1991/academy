import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    filteredCourses: [],
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilteredCourses: (state, action) => {
      state.filteredCourses = action.payload;
    },
  },
});

export const { setSearchTerm, setFilteredCourses } = searchSlice.actions;

export default searchSlice.reducer;
