/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios-movies";
import { RootState } from "../index";
import { IMovieDetails } from "./movieDetailsSlice";

const initialState: { data: IMovieDetails[] } = {
  data: [],
};

const BASE_URL = "8c09c358295d3cbfafb494eb81747233";


export const getNetflixOriginalsAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>("netflixOriginals/getNetflixOriginals", async () => {
  const response = await axios.get(
    `/discover/tv?api_key=${BASE_URL}&with_networks=213`
  );
  return response.data.results;
});

const netflixOriginalsSlice = createSlice({
  name: "netflixOriginals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getNetflixOriginalsAsync.fulfilled,
      (state, { payload }) => {
        state.data = payload;
      }
    );
  },
});

export default netflixOriginalsSlice.reducer;
