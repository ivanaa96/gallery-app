import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddComment from "../../components/AddComment";
import useFormattedDate from "../../hooks/useFormattedDate";
import { Link } from "react-router-dom";
import { getGallery } from "../../store/gallery/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectGalleryById } from "../../store/gallery/selectors";

function ViewGalleryPage() {
	const dispatch = useDispatch();
	const { id } = useParams();

	const gallery = useSelector(selectGalleryById);
	console.log("gallery selektor se promijenio", { gallery });

	const formattedDate = useFormattedDate(
		gallery ? gallery.created_at : "",
		"dd.MM.yyyy"
	);

	useEffect(() => {
		dispatch(getGallery(id));
	}, [id]);

	return (
		<div className="main">
			{gallery && (
				<div>
					<h2 className="title">{gallery.title}</h2>
					<p className="">Created: {formattedDate}</p>
					<p className="justify-content-center">{gallery.description}</p>
					{gallery.user && (
						<Link
							to={`/authors/${gallery.user.id}`}
							className="title gallery-row-author"
						>
							Author: {gallery.user.first_name} {gallery.user.last_name}
						</Link>
					)}
					<div
						id="carouselExampleSlidesOnly"
						className="carousel slide"
						data-ride="carousel"
					>
						<div className="carousel-inner">
							{gallery.images &&
								gallery.images.map((image, i) => (
									<img key={image.id} src={image.url} />
								))}
						</div>
					</div>

					<div className="list-group">
						<h4>Comments:</h4>
						{gallery.comments && gallery.comments.length ? (
							<ul>
								{gallery.comments.map((comment) => (
									<li key={comment.id}>{comment.body}</li>
								))}
							</ul>
						) : (
							<p>No comments</p>
						)}
					</div>
					<AddComment galleryId={gallery.id} />
				</div>
			)}
		</div>
	);
}

export default ViewGalleryPage;
