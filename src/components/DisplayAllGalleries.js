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
			<div className="list-group">
				{galleries && galleries.length ? (
					<ul>
						{galleries.map((gallery) => (
							<div key={gallery.id}>
								<p>{gallery.title}</p>
								{/* <GalleryRow
									key={gallery.id}
									id={gallery.id}
									user={gallery.user}
									title={gallery.title}
									description={gallery.description}
									created={gallery.created_at}
								/> */}
							</div>
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
