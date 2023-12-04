// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

// Configure the Redux store using the rootReducer
const store = configureStore({
  reducer: rootReducer,
  // Add any additional middleware or configuration here if needed
});

export default store;
