import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthorsGalleries } from "../../store/gallery/slice";
import { selectAuthorsGalleries } from "../../store/gallery/selectors";
import { Link } from "react-router-dom";
import GallerySearch from "../../components/GallerySearch";
import GalleryPagination from "../../components/GalleryPagination";

function AuthorsGalleriesPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const usersDataAndGalleries = useSelector(selectAuthorsGalleries);

	useEffect(() => {
		dispatch(getAuthorsGalleries(id));
	}, [id]);

	const galleries = usersDataAndGalleries.galleries;

	return (
		<div className="main">
			<div>
				<GallerySearch />
			</div>
			<h2 className="title">Data about author:</h2>
			<h3>
				{usersDataAndGalleries.first_name} {usersDataAndGalleries.last_name}
			</h3>

			<h4 className="title">All galleries by this author:</h4>
			{galleries && (
				<ul>
					{galleries.map((g) => (
						<div key={g.id}>
							<Link to={`/galleries/${g.id}`} className="title">
								{g.title}
							</Link>
						</div>
					))}
				</ul>
			)}
		</div>
	);
}

export default AuthorsGalleriesPage;
