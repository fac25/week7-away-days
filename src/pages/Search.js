import { useState } from "react";
import Results from "../components/Results";
import SearchBar from "../components/SearchBar";

export default function Search() {
  // Link searchbar with results
  // SearchBar + Results here
  const [results, setResults] = useState([]);
  return (
    <div>
      <SearchBar results={results} setResults={setResults} />
      <Results results={results} />
    </div>
  );
}
