'use strict';


/**
 * Adiciona um novo livro
 *
 * body Books Objeto \"livro\" a ser inserido na livraria
 * no response value expected for this operation
 **/
exports.addBook = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta um livro
 *
 * isbn Long Isbn do livro a ser retornado
 * no response value expected for this operation
 **/
exports.deleteBook = function(isbn) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lista completade livros
 * Retorna a lista completa de livros da livraria
 *
 * returns List
 **/
exports.getBooks = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "editor" : "Record",
  "author" : "Sidney Sheldon",
  "isbn" : 6,
  "name" : "Nada dura para sempre",
  "id" : 0
}, {
  "editor" : "Record",
  "author" : "Sidney Sheldon",
  "isbn" : 6,
  "name" : "Nada dura para sempre",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Busca um livro pelo isbn
 * Retorna um único livro pelo número isbn
 *
 * isbn Long Isbn do livro a ser retornado
 * returns Books
 **/
exports.getBooksByIsbn = function(isbn) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "editor" : "Record",
  "author" : "Sidney Sheldon",
  "isbn" : 6,
  "name" : "Nada dura para sempre",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

