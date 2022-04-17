import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserService from "../services/UserService";

function Navbar({ handleLogout }) {
	const isLoggedIn = !!localStorage.getItem("token");

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">
					Galleries
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active nav-link">
							{<Link to="/">Galleries</Link>}
						</li>
						{!isLoggedIn && (
							<li className="nav-item active nav-link">
								{<Link to="/login">Login</Link>}
							</li>
						)}
						{!isLoggedIn && (
							<li className="nav-item active nav-link">
								{<Link to="/register">Register</Link>}
							</li>
						)}
						{isLoggedIn && (
							<li className="nav-item active nav-link">
								{<Link to="/my-galleries">My galleries</Link>}
							</li>
						)}
						{isLoggedIn && (
							<li className="nav-item active nav-link">
								{<Link to="/create">Create New Gallery</Link>}
							</li>
						)}
						{isLoggedIn && (
							<li className="nav-item active nav-link">
								<button onClick={handleLogout}>Logout</button>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
