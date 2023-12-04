// reportWebVitals.js

// This file defines a function, reportWebVitals, which takes a callback function
// (onPerfEntry) as a parameter. If the callback function is provided and is a
// function, it imports the web-vitals library and calls the different functions
// (getCLS, getFID, getFCP, getLCP, getTTFB) with the callback to measure various
// performance metrics.
// This is used to collect and report performance metrics during the development
// or production build of the React application.
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
