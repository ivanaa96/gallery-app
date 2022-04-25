import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLastPage, selectNextPageUrl } from "../store/gallery/selectors";
import GalleryRow from "./GalleryRow";
import { changeNextPageUrl } from "../store/gallery/slice";

function GalleryPagination() {
	const dispatch = useDispatch();
	const [galleries, setGalleries] = useState([]);
	const lastPage = useSelector(selectLastPage);
	const nextPageUrl = useSelector(selectNextPageUrl);

	async function loadMoreItems() {
		fetch(nextPageUrl)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				dispatch(changeNextPageUrl(json.next_page_url));
				setGalleries(json.data);
			})
			.catch((err) => console.error(`Fetch problem: ${err.message}`));
	}

	return (
		<div>
			{galleries?.length && (
				<ul>
					{galleries.map((g) => (
						<GalleryRow key={g.id} gallery={g} />
					))}
				</ul>
			)}
			{nextPageUrl !== null ? (
				<div>
					<button className="btn" onClick={loadMoreItems}>
						Load more
					</button>
				</div>
			) : (
				<p>No more libraries.</p>
			)}
		</div>
	);
}

export default GalleryPagination;
