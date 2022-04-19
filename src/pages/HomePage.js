import React from "react";
import GallerySearch from "../components/GallerySearch";
import { useSelector } from "react-redux";
import GalleryPagination from "../components/GalleryPagination";
import { isAuthenticated } from "../store/user/selectors";
import DisplayAllGalleries from "../components/DisplayAllGalleries";

function HomePage() {
	const isLoggedIn = useSelector(isAuthenticated);

	return (
		<div className="main">
			<h1 className="title">Welcome to Gallery application</h1>
			{isLoggedIn && (
				<div>
					<GallerySearch />
				</div>
			)}
			<div>
				<DisplayAllGalleries />
			</div>
			<div>
				<GalleryPagination />
			</div>
		</div>
	);
}

export default HomePage;
