import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectLastPage } from "../store/gallery/selectors";
import GalleryRow from "./GalleryRow";

function GalleryPagination() {
	const [galleries, setGalleries] = useState([]);
	const lastPage = useSelector(selectLastPage);
	console.log(lastPage);
	async function loadMoreItems() {
		let num = 1;
		num++;
		const link = `http://localhost:8000/api?page=${num}`;

		if (lastPage !== num) {
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
