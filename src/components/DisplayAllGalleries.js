import React, { useEffect } from "react";
import { getGalleries } from "../store/gallery/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectGalleriesDesc } from "../store/gallery/selectors";
import GalleryRow from "../components/GalleryRow";

function DisplayAllGalleries() {
	const dispatch = useDispatch();
	const galleries = useSelector(selectGalleriesDesc);

	useEffect(() => {
		dispatch(getGalleries());
	}, []);

	return (
		<div>
			<div className="justify-content-sm-evenly">
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
