const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
	'name': { type: String, required: true },
	'author': { type: String, required: true }
});

mongoose.model('books', bookSchema);