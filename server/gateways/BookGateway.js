const BookRepository = require('./mongodb/repositories/BookRepository');

class BookGateway {

	findBook(_id) {
		return BookRepository.find({ _id });
	}

	searchBooks() {
		return BookRepository.find();
	}

	save(book) {
		return BookRepository.save(book)
	}
}

module.exports = BookGateway;