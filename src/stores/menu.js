import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   menuActive: false,
}

const menu = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      setMenu: (state, action) => {
         state.menuActive = action.payload;
      }
   }
});

export const { setMenu } = menu.actions;

export default menu.reducer;