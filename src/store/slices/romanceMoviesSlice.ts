/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios-movies";
import { RootState } from "../index";
import { IMovieDetails } from "./movieDetailsSlice";

const initialState: { data: IMovieDetails[] } = {
  data: [],
};

const BASE_URL = "8c09c358295d3cbfafb494eb81747233";


export const getRomanceMoviesAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>("romance/getRomanceMovies", async () => {
  const response = await axios.get(
    `/discover/movie?api_key=${BASE_URL}&with_genres=28`
  );
  return response.data.results;
});

const romanceMovieSlice = createSlice({
  name: "romanceMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRomanceMoviesAsync.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export default romanceMovieSlice.reducer;
