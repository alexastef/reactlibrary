import React, { useState } from "react";
import  { SearchFormStyle } from "./SearchBar.styles";
import API from "../../util/API";

const SearchForm = ({ query, handleSearchInput, handleSubmit }) => {

  return (
    <SearchFormStyle onSubmit={handleSubmit}>
        <input 
        className="searchbar-input" 
        type="text" 
        name="searchTitle"
        value={query}
        onChange={handleSearchInput}
        ></input>
        <button 
        type="submit" 
        value="Submit" 
        className="searchbar-button"
        >Search!</button>
    </SearchFormStyle>
  )
}

export default SearchForm;
