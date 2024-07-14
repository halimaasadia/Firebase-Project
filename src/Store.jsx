import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/UserSlices' 


export default configureStore({
  reducer: {
    userLoginInfo: userSlice
  },
})