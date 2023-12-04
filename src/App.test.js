// App.test.js

import { render, screen } from "@testing-library/react";
import App from "./App";

/**
 * Test case for rendering the App component and checking if the "learn react" link is present.
 */
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
