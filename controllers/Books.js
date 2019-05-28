'use strict';

var utils = require('../utils/writer.js');
var Books = require('../service/BooksService');

module.exports.addBook = function addBook (req, res, next) {
  var body = req.swagger.params['body'].value;
  Books.addBook(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBook = function deleteBook (req, res, next) {
  var isbn = req.swagger.params['isbn'].value;
  Books.deleteBook(isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooks = function getBooks (req, res, next) {
  Books.getBooks()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByIsbn = function getBooksByIsbn (req, res, next) {
  var isbn = req.swagger.params['isbn'].value;
  Books.getBooksByIsbn(isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
