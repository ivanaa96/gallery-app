import React from "react";

function CommentErrors({ error }) {
	return (
		<div className="text-danger">
			<p>{error && ` ${error}`}</p>
		</div>
	);
}

export default CommentErrors;
