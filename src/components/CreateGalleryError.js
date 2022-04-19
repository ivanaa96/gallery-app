import React from "react";

function CreateGalleryError({ error }) {
	return (
		<div className="text-danger">
			{error.map((error, index) => (
				<p key={index}>{error}</p>
			))}
		</div>
	);
}

export default CreateGalleryError;
