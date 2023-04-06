import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
name: 'auth',
initialState: {isLoggedIn: false, token:false, visible:false},
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
   setVisible(state) 
   {
      state.visible = true;
   },
   setHidden(state) 
   {
      state.visible = false;
   }

   
}

});

export const {login, logout, onetimeTrue, onetimeFalse, setVisible, setHidden} = authSlice.actions;

export default authSlice.reducer;