import React from "react";
import { BookStyle } from "./BookResult.styles";

const BookResult = ({ book }) => {

  return (
    <BookStyle>
      <div className="row result-header">
        <div className="result-header--title">
          <h4 className="book-title">{book.volumeInfo.title}</h4>
          <h5 className="book-author">{book.volumeInfo.authors}</h5>
        </div>
        <div className="result-header--buttons">
          <button type="button result-button">View</button>
          <button type="button result-button">Save</button>
        </div>
      </div>
      <div className="row result-body">
        <div className="left-col image-col">
          <img src={book.volumeInfo.imageLinks.thumbnail} />
        </div>
        <div className="right-col info-col">
          <h5 className="book-description">{book.searchInfo.textSnippet}</h5>
        </div>
      </div>
      <hr />
    </BookStyle>
  )
}

export default BookResult;