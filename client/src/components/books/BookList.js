import React, { useContext } from 'react';
import { BookContext } from './contexts/BookContext';

const BookList = () => {
	const { books, deleteBook } = useContext(BookContext);

	return (
		<div className="section section-books">
			<div className="container">
				<h6>Books</h6>
				<ul>
					{books.map(({id, title, author}) => (
						<li key={id}>
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
									onClick={() => deleteBook(id)}
									className="book-delete"
								>
									<i className="material-icons">delete</i>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default BookList;