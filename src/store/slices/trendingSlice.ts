/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'
import { IMovieDetails } from './movieDetailsSlice'

const initialState: { data: IMovieDetails[] } = {
  data: [],
}

const BASE_URL = "8c09c358295d3cbfafb494eb81747233";


export const getTrendingAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>('trending/getTrending', async () => {
  const response = await axios.get(
    `/trending/all/week?api_key=${BASE_URL}&language=en-US`
  )
  return response.data.results
})

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingAsync.fulfilled, (state, { payload }) => {
      state.data = payload
    })
  },
})

export default trendingSlice.reducer
