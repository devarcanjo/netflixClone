/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios-movies";
import { RootState } from "../index";

const initialState = {
  searchResults: [{}],
  isLoading: true,
};

const BASE_URL = "8c09c358295d3cbfafb494eb81747233";

export const searchItemsAsync = createAsyncThunk<
  any,
  string,
  { state: RootState }
>("search/getSearchItems", async (searchTerm) => {
  const response = await axios.get(
    `/search/multi?api_key=${BASE_URL}&language=en-US&include_adult=false&query=${searchTerm}`
  );
  return response.data.results;
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchItemsAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.searchResults = payload;
    });
    builder.addCase(searchItemsAsync.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default searchSlice.reducer;
