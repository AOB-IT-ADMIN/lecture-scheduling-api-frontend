// index.js

// This file is the entry point for the React application.
// It renders the App component within a Redux Provider and StrictMode,
// and measures the performance of the app using reportWebVitals.

// index.js

import React from "react";
import ReactDOM from "react-dom/client";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JS bundle
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import Bootstrap icons CSS
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create a root element using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component within a Redux Provider and StrictMode
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// Measure the performance of the app
reportWebVitals();

// Measure the performance of the app
reportWebVitals();
