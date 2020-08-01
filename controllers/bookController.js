const db = require('../models/book');

module.exports = { 
//add 
addBook: (req, res) => {
    db.Book
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
//remove 
removeBookById: (req, res) => {
    db.Book
    .deleteOne({ "": req.params.id })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  getBookById: (req, res) => {
    db.Book
    .findOne({ id: req.params.id })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
//get 
}