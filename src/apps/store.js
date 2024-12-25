import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "../features/cocktail/cocktail";

export const store = configureStore({
  reducer: {
    [cocktailApi.reducerPath]: cocktailApi.reducer, // Register the API reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cocktailApi.middleware), // Properly add middleware
});

console.log(store.getState()); // Log the initial state for debugging
