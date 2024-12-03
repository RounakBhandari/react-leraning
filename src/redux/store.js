import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

//configures a store which will be wrapped around the app in index.js file so that each component and pages will have access to this store.
export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
  },
});
