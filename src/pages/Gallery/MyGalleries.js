import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMyGalleries } from "../../store/gallery/selectors";
import { getMyGalleries } from "../../store/gallery/slice";
import GallerySearch from "../../components/GallerySearch";
import GalleryPagination from "../../components/GalleryPagination";
import GalleryRow from "../../components/GalleryRow";

function MyGalleries() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMyGalleries());
	}, []);

	const myGalleries = useSelector(selectMyGalleries);
	const galleries = myGalleries.galleries;

	return (
		<div className="main">
			<div>
				<GallerySearch />
			</div>
			{myGalleries.title && <h2 className="title">MyGalleries</h2>}
			{myGalleries.galleries?.length ? (
				<div>
					<ul>
						{galleries.map((g) => (
							<GalleryRow key={g.id} gallery={g} />
						))}
					</ul>
					<div>
						<GalleryPagination />
					</div>
				</div>
			) : (
				<p className="info alert alert-danger alert-danger">
					{" "}
					You haven't created any gallery yet.
				</p>
			)}
		</div>
	);
}

export default MyGalleries;
