// reducer.js
// Initial state for the Redux store
const initialState = {
  darkMode: false, // Default dark mode is set to false
};

// Root reducer function that manages state changes based on actions
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      // Toggle the darkMode state when the TOGGLE_DARK_MODE action is dispatched
      return {
        ...state, // Maintain the current state
        darkMode: !state.darkMode, // Toggle the value of darkMode
      };
    default:
      // Return the current state for any other action
      return state;
  }
};

export default rootReducer;
