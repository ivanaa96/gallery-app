import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../store/user/selectors";

function Navbar() {
	const isLoggedIn = useSelector(userSelector);

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
							<Link to="/">Galleries</Link>
						</li>
						<li className="nav-item active nav-link">
							<Link to="/login">Login</Link>
						</li>
						<li className="nav-item active nav-link">
							<Link to="/register">Register</Link>
						</li>
						{isLoggedIn && (
							<li className="nav-item active nav-link">
								<Link to="/my-galleries">My galleries</Link>
							</li>
						)}
						{isLoggedIn && (
							<li className="nav-item active nav-link">
								<Link to="/create">Create New Gallery</Link>
							</li>
						)}
						{isLoggedIn && (
							<li className="nav-item active nav-link">
								<button onClick>Logout</button>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
