const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    const { query: params } = req;

    axios.get("https://www.googleapis.com/books/v1/volumes", { params })
      .then(results =>
        
        db.Book.find().then(dbBooks =>
          results.data.items.filter(googleBook =>
            dbBooks.every(dbBook => dbBook.googleId !== googleBook.id)
          )
        )
      )
      .then(bookRes => res.json(bookRes))
      .catch(err => res.status(422).json(err));
  }
}