const BookGateway = require('../../gateways/BookGateway');

class BookCreator {

	execute(newBooks) {
		new BookGateway().save(newBooks);
	}
}

module.exports = BookCreator;