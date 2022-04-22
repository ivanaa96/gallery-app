import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectLinksForPagination } from "../store/gallery/selectors";
import GalleryRow from "./GalleryRow";

function GalleryPagination() {
	const links = useSelector(selectLinksForPagination);
	const [galleries, setGalleries] = useState([]);

	async function loadMoreItems() {
		// const test = links[2].url;
		let num = 1;
		num++;
		const link = `http://localhost:8000/api?page=${num}`;

		fetch(link)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error: ${response.status}`);
				}
				return response.json();
			})
			.then((json) => setGalleries(json.data))
			.catch((err) => console.error(`Fetch problem: ${err.message}`));
	}

	return (
		<div>
			{galleries?.length ? (
				<ul>
					{galleries.map((g) => (
						<GalleryRow key={g.id} gallery={g} />
					))}
				</ul>
			) : (
				<div>
					<button className="btn" onClick={loadMoreItems}>
						Load more
					</button>
				</div>
			)}
		</div>
	);
}

export default GalleryPagination;
