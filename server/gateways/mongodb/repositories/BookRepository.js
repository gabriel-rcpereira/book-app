const mongoose = require('mongoose');
const bookSchema = require('../models/Book');
const Book = mongoose.model('books');

const BookRepository = {
	find(filter = {}) {
		return Book.find(filter);
	}
	,save(books) {
		books.map((book) => (new Book(book)))
			.forEach(book => {
				book.save();
			});
	}
};

module.exports = BookRepository;