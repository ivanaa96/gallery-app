import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	searchValueSelector,
	galleriesSelector,
} from "../store/gallery/selectors";
import { setSearchValue } from "../store/gallery/slice";

function GallerySearch() {
	const dispatch = useDispatch();
	const value = useSelector(searchValueSelector);
	const galleries = useSelector(galleriesSelector);

	return (
		<div className="sidebar">
			<h5>Search for gallery</h5>
			<input
				className="input-sidebar"
				type="text"
				placeholder="Search.."
				value={value}
				onChange={(e) => {
					dispatch(setSearchValue(e.target.value));
				}}
			/>
			<div>
				<button className="btn btn-sidebar">Filter</button>
			</div>

			<div>
				{galleries.length
					? galleries.map((gallery) => <Link to={gallery.id} />)
					: value && <p className="result-input">No results for "{value}" </p>}
			</div>
		</div>
	);
}

export default GallerySearch;
