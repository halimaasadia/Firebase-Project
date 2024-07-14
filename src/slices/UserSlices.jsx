import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null
  },
  reducers: {
    userLoginInfo: (state,action)=> {
        console.log(state);
        console.log(action);
    
    },
  },
})


export const { userLoginInfo } = userSlice.actions

export default userSlice.reducer