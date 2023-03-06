import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
name: 'auth',
initialState: {isLoggedIn: false, token:false},
reducers :
{
   login(state) {
    state.isLoggedIn = true;
   }, 
   logout(state) {
    state.isLoggedIn = false;
   } ,
   onetimeTrue(state)
   {
      state.token = true
   },
   onetimeFalse(state)
   {
      state.token = false
   },

   
}

});

export const {login, logout, onetimeTrue, onetimeFalse} = authSlice.actions;

export default authSlice.reducer;