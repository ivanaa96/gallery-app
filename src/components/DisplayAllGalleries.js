import React, { useEffect } from "react";
import { getGalleries } from "../store/gallery/slice";
import { useDispatch, useSelector } from "react-redux";
import {
	selectGalleriesDesc,
	selectAllGalleries,
} from "../store/gallery/selectors";
import GalleryRow from "../components/GalleryRow";

function DisplayAllGalleries() {
	const dispatch = useDispatch();
	const galleries = useSelector(selectAllGalleries);

	useEffect(() => {
		dispatch(getGalleries());
	}, []);

	return (
		<div>
			<div className="list-group">
				{galleries?.length ? (
					<ul>
						{galleries.map((g) => (
							<GalleryRow key={g.id} gallery={g} />
						))}
					</ul>
				) : (
					<p>No galleries to show.</p>
				)}
			</div>
		</div>
	);
}

export default DisplayAllGalleries;
