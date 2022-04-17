import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/user/slice";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../components/shared/PrivateRoute";
import GuestRoute from "../components/shared/GuestRoute";
import MyGalleries from "../pages/Gallery/MyGalleries";
import AuthorsGalleriesPage from "../pages/Gallery/AuthorsGalleriesPage";
import ViewGalleryPage from "../pages/Gallery/ViewGalleryPage";
import CreateNewGalleryPage from "../pages/Gallery/CreateNewGalleryPage";
import UserService from "../services/UserService";

function Layout() {
	const [isAuthenticated, setIsAuthenticated] = useState(
		Boolean(localStorage.getItem("token"))
	);

	const dispatch = useDispatch();

	async function handleLogout() {
		await UserService.logout();
		setIsAuthenticated(false);
		dispatch(removeUser());
	}

	return (
		<div>
			<Router>
				<Navbar handleLogout={handleLogout} />
				<Switch>
					<GuestRoute path="/login">
						<Login
							onLogin={() => {
								setIsAuthenticated(true);
							}}
						/>
					</GuestRoute>

					<GuestRoute path="/register">
						<Register
							onRegister={() => {
								setIsAuthenticated(true);
							}}
						/>
					</GuestRoute>

					<PrivateRoute path="/my-galleries">
						<MyGalleries />
					</PrivateRoute>

					<PrivateRoute path="/authors/:id">
						<AuthorsGalleriesPage />
					</PrivateRoute>

					<PrivateRoute path="/galleries/:id">
						<ViewGalleryPage />
					</PrivateRoute>

					<PrivateRoute path="/create">
						<CreateNewGalleryPage />
					</PrivateRoute>

					<Route exact path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default Layout;
