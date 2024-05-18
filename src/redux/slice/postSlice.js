import { createSlice } from "@reduxjs/toolkit";
import { postAsyncThunk } from "../thunk/postThunk";


export const postSlice = createSlice({
  name: 'post/id',
  initialState: {
    loading: false,
    data: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postAsyncThunk.pending, (state) => {
      state.loading = true
    }).addCase(postAsyncThunk.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    }).addCase(postAsyncThunk.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
  }
})

export default postSlice.reducer

