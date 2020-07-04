const mongoose = require('mongoose');
const bookSchema = require('../models/Book');
const Book = mongoose.model('books');

const BookRepository = {
	find(filter = {}) {
		return Book.find(filter);
	}
	,save(book) {
		return new Book(book).save();
	}
};

module.exports = BookRepository;