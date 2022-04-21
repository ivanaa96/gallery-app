import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMyGalleries } from "../../store/gallery/selectors";
import { getMyGalleries } from "../../store/gallery/slice";
import { Link } from "react-router-dom";
import GallerySearch from "../../components/GallerySearch";
import GalleryPagination from "../../components/GalleryPagination";

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
			{myGalleries.galleries?.length && (
				<ul>
					{galleries.map((g) => (
						<div key={g.id}>
							<Link
								to={`/galleries/${g.id}`}
								className="title gallery-row-title"
							>
								{g.title}
							</Link>

							<p className="">Created: {g.created_at}</p>

							<div className="justify-content-sm-evenly gallery-row-image">
								<img src={g.images[0].url} width="400px"></img>
							</div>
						</div>
					))}
				</ul>
			)}
			<div>
				<GalleryPagination />
			</div>
		</div>
	);
}

export default MyGalleries;
