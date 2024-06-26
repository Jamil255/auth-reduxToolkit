import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../../config'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    error: 'false',
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postDataLogin.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(postDataLogin.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(postDataLogin.rejected, (state, action) => {
      state.error = 'error'
      state.error = action.payload
    })
  },
})

export const postDataLogin = createAsyncThunk(
  'login/postDataLogin',
  async (obj, { rejectWithValue }) => {
    try {
      //   console.log(obj)
      const userRes = await axios.post(`${BASE_URL}/login`, obj)
      console.log('userRes: ' + userRes)
      return userRes
    } catch (error) {
      // console.log(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data)
    }
  }
)
export default loginSlice.reducer
