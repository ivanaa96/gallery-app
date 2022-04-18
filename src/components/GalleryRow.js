import React from "react";
import { useDispatch, useSelector } from "react-redux";

function GalleryRow({ gallery }) {
	return (
		<div>
			<a href={`/galleries/${gallery.id}`}>
				<h4 className="list-group-item">{gallery.title}</h4>
			</a>
			<h6>
				<a href="authors/${author.id}">{gallery.user}</a>
			</h6>
			<h6>Created: {gallery.created_at}</h6>
			{/* <Link to=View gallery</Link> */}
		</div>
	);
}

export default GalleryRow;
