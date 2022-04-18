import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { isAuthenticated } from "../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/user/slice";
import { useHistory } from "react-router-dom";

function Navbar() {
	const isUserAuthenticated = useSelector(isAuthenticated);
	const dispatch = useDispatch();
	const history = useHistory();

	async function handleLogout() {
		dispatch(
			logout({
				meta: {
					onSuccess: () => {
						history.replace("/login");
					},
				},
			})
		);
	}
	return (
		<div>
			<nav className="navbar navbar-color navbar-expand-lg">
				<Link
					className="navbar-brand navbar-item font-weight-bold mt-3 mb-3 ml-4"
					to="/"
				>
					Galleries
				</Link>
				{isUserAuthenticated && (
					<Link className="navbar-item" to="/">
						All Galleries
					</Link>
				)}
				{!isUserAuthenticated && (
					<Link className="navbar-item" to="/register">
						Register
					</Link>
				)}

				{!isUserAuthenticated && (
					<Link className="navbar-item" to="/login">
						Login
					</Link>
				)}
				{isUserAuthenticated && (
					<Link className="navbar-item" to="/my-galleries">
						My Galleries
					</Link>
				)}
				{isUserAuthenticated && (
					<Link className="navbar-item" to="/create">
						Create New Gallery
					</Link>
				)}
				{isUserAuthenticated && (
					<span className="logout-span btn" onClick={handleLogout}>
						Logout
					</span>
				)}
			</nav>
		</div>
	);
}

export default Navbar;
