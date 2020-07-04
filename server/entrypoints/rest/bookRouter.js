const BookCreator = require('../../core/usecases/BookCreator');
const BookSearcher = require('../../core/usecases/BookSearcher');
const BookFinder = require('../../core/usecases/BookFinder');

module.exports = (app) => {

	app.get('/api/v1/books', async (req, res) => {
		const books = await new BookSearcher().execute();
		res.status(200).send(books);
	});

	app.get('/api/v1/books/:id', async (req, res) => {
		const { id } = req.params;
		try {
			const book = await new BookFinder().execute(id);		
			res.status(200).send(book);
		} catch (error) {
			res.status(404);
		}
	});

	app.post('/api/v1/books', (req, res) => {
		const newBook = req.body;
		new BookCreator().execute(newBook);
		res.status(201).send();
	});	

	app.put('/api/v1/books/:id', (req, res) => {
		const updatedBook = {};
		res.status(204).send();
	});	

	app.delete('/api/v1/books/:id', (req, res) => {
		const deletedBook = {};
		res.status(204).send();
	});	
};