const BookGateway = require('../../gateways/BookGateway');

class BookSearcher {
	execute() {
		return new BookGateway().searchBooks();
	}
}

module.exports = BookSearcher;