import React from "react";
import Navbar from "../components/Navbar";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Layout() {
	return (
		<main className="container">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/login">
						<Login />
					</Route>

					<Route path="/register">
						<Register />
					</Route>

					<Route exact path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</main>
	);
}

export default Layout;
