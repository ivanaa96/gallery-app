import React from "react";

function GalleryRow({ id, title, user, created }) {
	return (
		<div className="list-group-item">
			<h5>
				<a href={id}>{title}</a>
			</h5>
			<h6>
				<a href={user.id}>{user}</a>
			</h6>
			<h6>Created: {created}</h6>
		</div>
	);
}

export default GalleryRow;
