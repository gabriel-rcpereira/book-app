const BookGateway = require('../../gateways/BookGateway');

class BookCreator {

	execute(newBook) {
		new BookGateway().save(newBook);
	}
}

module.exports = BookCreator;