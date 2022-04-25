import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../components/shared/PrivateRoute";
import GuestRoute from "../components/shared/GuestRoute";
import MyGalleries from "../pages/Gallery/MyGalleries";
import AuthorsGalleriesPage from "../pages/Gallery/AuthorsGalleriesPage";
import ViewGalleryPage from "../pages/Gallery/ViewGalleryPage";
import CreateNewGalleryPage from "../pages/Gallery/CreateNewGalleryPage";

function Layout() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<GuestRoute path="/login">
						<Login />
					</GuestRoute>

					<GuestRoute path="/register">
						<Register />
					</GuestRoute>

					<PrivateRoute path="/my-galleries">
						<MyGalleries />
					</PrivateRoute>

					<PrivateRoute path="/authors/:id">
						<AuthorsGalleriesPage />
					</PrivateRoute>

					<Route path="/galleries/:id">
						<ViewGalleryPage />
					</Route>

					<PrivateRoute path="/create">
						<CreateNewGalleryPage />
					</PrivateRoute>

					<PrivateRoute path="/edit-gallery/:id">
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
