import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<AlertState>
					<BrowserRouter>
						<Fragment>
							<Navbar />
							<div className="container">
								<Alerts></Alerts>
								<Routes>
									<Route path="/" element={<Home />}></Route>
									<Route path="/about" element={<About />}></Route>
									<Route path="/register" element={<Register />}></Route>
									<Route path="/login" element={<Login />}></Route>
								</Routes>
							</div>
						</Fragment>
					</BrowserRouter>
				</AlertState>
			</ContactState>
		</AuthState>
	);
};

export default App;
