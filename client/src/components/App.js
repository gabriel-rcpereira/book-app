import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../assets/css/App.css';

import BookContextProvider from './books/contexts/BookContext';

import Navbar from './screens/Navbar';
import Dashboard from './screens/Dashboard';
import About from './screens/About';
import Contact from './screens/Contact';

const App = () => {
  return (
		<BookContextProvider>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</BrowserRouter>
		</BookContextProvider>
  );
}

export default App;