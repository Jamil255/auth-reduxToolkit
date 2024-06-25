import { configureStore } from '@reduxjs/toolkit'
import signupReducer from './slice/auth/authSlice'

const store = new configureStore({
  reducer: {
    signup: signupReducer,
  },
})
export default store
