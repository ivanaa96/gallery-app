import React, { useState, useEffect } from "react";
import GallerySearch from "../components/GallerySearch";
import GalleryService from "../services/GalleryService";
import { setGalleries } from "../store/gallery/slice";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import GalleryRow from "../components/GalleryRow";
import GalleryPagination from "../components/GalleryPagination";
import { isAuthenticated } from "../store/user/selectors";
import { useSelector } from "react-redux";

function HomePage() {
	const isLoggedIn = useSelector(isAuthenticated);
	const [galleries, setGalleries] = useState([]);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	const fetchGalleries = async () => {
	// 		const data = await GalleryService.getAll();

	// 		dispatch(setGalleries(data));
	// 	};
	// 	fetchGalleries();
	// }, []);

	return (
		<div className="main">
			<h1 className="title">Welcome to Gallery application</h1>
			{isLoggedIn && (
				<div>
					<GallerySearch />
				</div>
			)}

			<div className="list-group">
				{galleries && galleries.length ? (
					<ul>
						{galleries.map((gallery) => (
							<div key={gallery.id}>
								<GalleryRow gallery={gallery} />
							</div>
						))}
					</ul>
				) : (
					<p>No galleries to show.</p>
				)}
			</div>
			<div>
				<GalleryPagination />
			</div>
		</div>
	);
}

export default HomePage;
