import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../../config'

const singupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    error: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postData.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(postData.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(postData.rejected, (state, action) => {
      state.error = false
    })
  },
})

export const postData = createAsyncThunk(
  'signup/postData',
  async (obj, { rejectWithValue }) => {
    try {
      console.log(obj)
      const userRes = await axios.post(`${BASE_URL}/registar`, obj)
      return userRes
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export default singupSlice.reducer
