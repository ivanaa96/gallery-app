import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFormattedDate from "../../hooks/useFormattedDate";
import { Link } from "react-router-dom";
import { getGallery, deleteGalleryMethod } from "../../store/gallery/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectGalleryById } from "../../store/gallery/selectors";
import { useHistory } from "react-router-dom";
import DisplayAllComments from "../../components/DisplayAllComments";

function ViewGalleryPage() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const history = useHistory();

	const gallery = useSelector(selectGalleryById);
	// console.log("gallery selektor se promijenio", { gallery });

	const formattedDate = useFormattedDate(
		gallery ? gallery.created_at : "",
		"dd.MM.yyyy"
	);

	useEffect(() => {
		dispatch(getGallery(id));
	}, [id]);

	const handleDeleteGallery = (galleryId) => {
		dispatch(deleteGalleryMethod(galleryId));
		history.push("/my-galleries");
	};

	return (
		<div className="main">
			{gallery && (
				<div>
					<h2 className="title">{gallery.title}</h2>
					{/* <button onClick={()=>  } className="edit-button btn">Edit</button> */}
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
						id="carouselExampleControls"
						className="carousel slide"
						data-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								{gallery.images &&
									gallery.images.map((image, i) => (
										<div key={image.id} className="carousel-image">
											<a href={image.url}>
												<img
													src={image.url}
													alt={image.title}
													className="d-block w-100"
												/>
											</a>
										</div>
									))}
							</div>
						</div>
					</div>
					<hr />
					<DisplayAllComments gallery={gallery} />
				</div>
			)}
			<hr />
			<button
				className="btn"
				onClick={() => {
					handleDeleteGallery(gallery.id);
				}}
			>
				Delete gallery
			</button>
		</div>
	);
}

export default ViewGalleryPage;
