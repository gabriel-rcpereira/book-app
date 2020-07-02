import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import BookContextProvider from './components/books/contexts/BookContext';

import Navbar from './components/screens/Navbar';
import Dashboard from './components/screens/Dashboard';
import About from './components/screens/About';
import Contact from './components/screens/Contact';

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