import React from "react";
import { Link } from "react-router-dom";
import useFormattedDate from "../hooks/useFormattedDate";

function GalleryRow({ gallery }) {
	const formattedDate = useFormattedDate(
		gallery ? gallery.created_at : "",
		"dd.MM.yyyy"
	);

	return (
		<div className="justify-content-sm-evenly gallery-row-margin">
			{gallery && (
				<div>
					<Link
						to={`/galleries/${gallery.id}`}
						className="title gallery-row-title"
					>
						{gallery.title}
					</Link>

					<br />
					{gallery.user && (
						<div>
							<Link
								to={`/authors/${gallery.user.id}`}
								className="title gallery-row-author"
							>
								Author: {gallery.user.first_name} {gallery.user.last_name}
							</Link>
						</div>
					)}

					<h6>Created: {formattedDate}</h6>
					{gallery.images[0] && (
						<div>
							<div className="justify-content-sm-evenly gallery-row-image">
								<img src={gallery.images[0].url} width="400px"></img>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default GalleryRow;
