import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredGalleries } from "../store/gallery/slice";
import {
	selectFilteredGalleries,
	selectFilter404,
} from "../store/gallery/selectors";
import { Link } from "react-router-dom";
import GalleryRow from "../components/GalleryRow";

function GallerySearch() {
	const dispatch = useDispatch();
	const filteredGalleries = useSelector(selectFilteredGalleries);
	const filter404 = useSelector(selectFilter404);
	const [query, setQuery] = useState("");

	const handleFilter = async (event) => {
		event.preventDefault();
		dispatch(getFilteredGalleries(query));
		setQuery("");
	};

	return (
		<div className="sidebar">
			<h5>Search for gallery</h5>

			<input
				name="query"
				className="input-sidebar"
				type="text"
				placeholder="Search.."
				value={query}
				onChange={({ target }) => setQuery(target.value)}
			/>
			<div>
				<button onClick={handleFilter} className="btn btn-sidebar">
					Filter
				</button>
			</div>

			{filteredGalleries.length
				? filteredGalleries.map((gallery) => (
						<div key={gallery.id} className="sidebar-results">
							{/* <GalleryRow key={gallery.id} gallery={gallery} /> */}

							<Link to={`/galleries/${gallery.id}`}>{gallery.title}</Link>
						</div>
				  ))
				: filter404 && <span className="sidebar-results">{filter404}</span>}
		</div>
	);
}

export default GallerySearch;
