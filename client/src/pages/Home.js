import React, { useState } from "react";
import SearchForm from "../components/SearchBar";
import Results from "../components/Results";
import API from "../util/API";
import {BlockStyle} from "../App.styles";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookResults, setResults] = useState([]);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  }
  
  const getBooks = () => {
    API.getBooks(searchTerm)
      .then(books => setResults(books))
      .catch(err => console.log(err));
    
    setSearchTerm("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    getBooks();
  }

  return (
    <>
      <BlockStyle>
        <div className="searchbar-header">
          <h4>Looking for a book?</h4>
          <h5>Enter the title below</h5>
        </div>
        <SearchForm
          handleSearchInput={handleSearchInput}
          handleSubmit={handleSubmit}
          query={searchTerm} />
      </BlockStyle>

<BlockStyle>
<Results results={bookResults} />
</BlockStyle>
    </>
  )
}

export default Home;