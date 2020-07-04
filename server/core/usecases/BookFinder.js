const BookGateway = require('../../gateways/BookGateway');
const NotFoundException = require('./exceptions/NotFoundException');

class BookFinder {
	execute(id) {
		const book = new BookGateway().findBook(id);

		if (!book) {
			throw new NotFoundException(`Book [${id}] not found`);
		}

		return book;
	}
}

module.exports = BookFinder;