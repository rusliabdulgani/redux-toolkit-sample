import { createAsyncThunk } from "@reduxjs/toolkit";

export const postAsyncThunk = createAsyncThunk(
  'post/id',
  async (id, { rejectWithValue }) => {
    try {
      const postRaw = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const post = await postRaw.json()
      return post
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)


