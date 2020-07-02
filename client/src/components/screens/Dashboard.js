import React, { Fragment } from 'react';
import BookList from '../books/BookList';
import BookForm from '../books/BookForm';

const Dashboard = () => {
	return (
		<Fragment>
			<BookList/>
			<BookForm/>
		</Fragment>
	);
};

export default Dashboard;