import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navbar({ handleLogout }) {
	const isLoggedIn = !!localStorage.getItem("token");

	return (
		<div>
			<nav className="navbar navbar-expand-lg">
				<a className="navbar-brand" href="/">
					<Link
						className="navbar-brand navbar-item font-weight-bold mt-3 mb-3 ml-4"
						to="/"
					>
						Galleries
					</Link>
				</a>
				{!isLoggedIn && (
					<Link className="navbar-item" to="/register">
						Register
					</Link>
				)}

				{!isLoggedIn && (
					<Link className="navbar-item" to="/login">
						Login
					</Link>
				)}
				{isLoggedIn && (
					<Link className="navbar-item" to="/my-galleries">
						My Galleries
					</Link>
				)}
				{isLoggedIn && (
					<Link className="navbar-item" to="/create">
						Create New Gallery
					</Link>
				)}
				{isLoggedIn && (
					<span className="logout-span btn" onClick={handleLogout}>
						Logout
					</span>
				)}
			</nav>
		</div>
	);
}

export default Navbar;
