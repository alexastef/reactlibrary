const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Book.find({})
      .then(savedBooks => res.json(savedBooks))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Book.create(req.body)
      .then(newBook => res.json(newBook))
      .catch(err => res.status(422).json(err))
  },
  findById: (req, res) => {
    db.Book.findById(req.params.id)
      .then(oneBook => res.json(oneBook))
      .catch(err => res.status(422).json(err))
  },
  update: (req, res) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body)
      .then(updatedBook => res.json(updatedBook))
      .catch(err => res.status(422).json(err))
  },
  remove: (req, res) => {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
}