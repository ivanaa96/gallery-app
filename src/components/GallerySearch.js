import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../store/gallery/slice";
import { selectSearch, selectAllGalleries } from "../store/gallery/selectors";
function GallerySearch() {
	const dispatch = useDispatch();
	const search = useSelector(selectSearch);
	const galleries = useSelector(selectAllGalleries);

	const filteredGalleries =
		search &&
		galleries.filter((gallery) =>
			gallery.title.toLowerCase().includes(search.toLowerCase())
		);

	return (
		<div className="sidebar">
			<h5>Search for gallery</h5>

			<input
				className="input-sidebar"
				type="text"
				placeholder="Search.."
				onChange={(e) => {
					dispatch(addSearch(e.target.value));
				}}
			/>
			<div>
				<button className="btn btn-sidebar">Filter</button>
			</div>

			{filteredGalleries.length
				? filteredGalleries.map((gallery) => (
						<div key={gallery.id} className="sidebar-results">
							<li>
								<a href={gallery.id}>{gallery.title}</a>
							</li>
						</div>
				  ))
				: search && (
						<span className="sidebar-results">There is not such gallery!</span>
				  )}
		</div>
	);
}

export default GallerySearch;
