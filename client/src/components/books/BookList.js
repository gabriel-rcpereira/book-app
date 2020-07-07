import React, { useContext, useEffect } from 'react';
import { BookContext } from './contexts/BookContext';

import axios from 'axios';

const BookList = () => {
	const { books, setBooks, deleteBook } = useContext(BookContext);

	useEffect(() => {
		// axios.get('http://localhost:5000/api/v1/books')
		// 	.then((persistedBooks) => {
		// 		setBooks(persistedBooks.data);
		// 	});
	});

	const handleClickSave = () => {
		const booksToSave = books.filter(({ id }) => !id);
		axios.post('http://localhost:5000/api/v1/books', booksToSave);
	};

	return (
		<div className="section section-books">
			<div className="container">
				<h6>Books</h6>
				<ul>
					{books.map(({ _id, title, author }) => (
						<li key={_id}>
							<div className="card book">
								<div className="book-image">
									{/* TODO book image
									<i></i>  */}
								</div>
								<div className="book-details">
									<div className="book-title">{title}</div>
									<div className="book-title">{author}</div>
								</div>
								<div
									onClick={() => deleteBook(_id)}
									className="book-delete"
								>
									<i className="material-icons">delete</i>
								</div>
							</div>
						</li>
					))}
				</ul>
				<div className="input-field center">
					<button
						className="btn waves-effect waves-light red darken-2"
						onClick={handleClickSave}
					>
						<i className="material-icons right">save</i>
						Save
					</button>
				</div>
			</div>
		</div>
	);
}

export default BookList;