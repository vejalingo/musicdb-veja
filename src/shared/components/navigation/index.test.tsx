import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./";

describe("Nav", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <Navigation />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
