import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import SearchBar from "../components/SearchBar";

describe("search", () => {
  let results = [];
  const setResults = (val) => (results = val);

  it("checks result based on user search", () => {
    // Set location
    const { getByTestId } = render(
      <SearchBar results={results} setResults={setResults} />
    );

    // User chooses location
    const location = screen.getByTestId("location");
    fireEvent.change(location, { target: { value: "london" } });

    // User sets start and end date
    const startDate = screen.getByTestId("startDate");
    fireEvent.change(startDate, { target: { value: "2022-11-15" } });

    const endDate = screen.getByTestId("endDate");
    fireEvent.change(endDate, { target: { value: "2022-11-16" } });

    // Clicks search
    const searchBtn = screen.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    // Check results value
    expect(results.length).toBe(1);
  });
});
