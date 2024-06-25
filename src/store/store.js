import { configureStore } from '@reduxjs/toolkit'
import signupReducer from './slice/auth/signupSlice'
import loginReducer from './slice/auth/loginSlice'

const store = new configureStore({
  reducer: {
        signup: signupReducer,
      login: loginReducer
  },
})
export default store
