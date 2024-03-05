/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios-movies";
import { RootState } from "../index";
import { IMovieDetails } from "./movieDetailsSlice";

const initialState: { data: IMovieDetails[] } = {
  data: [],
};

const BASE_URL = "8c09c358295d3cbfafb494eb81747233";


export const getDocumentariesAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>("documentary/getDocumentaries", async () => {
  const response = await axios.get(
    `/discover/movie?api_key=${BASE_URL}&with_genres=99`
  );
  return response.data.results;
});

const documentarySlice = createSlice({
  name: "actionMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDocumentariesAsync.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export default documentarySlice.reducer;
