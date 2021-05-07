import React, { useState } from "react";
// import  { ResultsStyle } from "./Results.styles";
import BookResult from "../BookResult";
import API from "../../util/API";

const Results = ({ results }) => {
  const bookResults = results.data;

  return (
    // <ResultsStyle>
    <div className="results-block">
      <div className="results-header">
        <h4>Results</h4>
      </div>
      <div className="results-body">
        {bookResults &&
          bookResults.map(book =>
              <BookResult book={book} />
          )
        }
      </div>
    </div>
     
    // </ResultsStyle>
  )
}

export default Results;