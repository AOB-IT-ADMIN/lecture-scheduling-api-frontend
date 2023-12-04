// reducers/index.js
import { combineReducers } from "redux";
import darkModeReducer from "./darkModeReducer";

// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  darkMode: darkModeReducer, // Include the darkModeReducer for managing dark mode state
  // Add other reducers here if needed
});

export default rootReducer;
