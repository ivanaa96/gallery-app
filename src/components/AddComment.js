import React, { useState } from "react";
import CommentService from "../services/CommentService";
import { useSelector, useDispatch } from "react-redux";
import { selectGalleryById, selectComments } from "../store/gallery/selectors";
import { getComments } from "../store/gallery/slice";

function AddComment({ galleryId }) {
	const [newComment, setNewComment] = useState({ body: "" });
	const gallery = useSelector(selectGalleryById);
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(getComments({ comment: newComment, id: galleryId }));
		setNewComment({ body: "" });
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="form-group">
				<label htmlFor="body" className="col-form-label col-25">
					Comment:
				</label>

				<input
					type="body"
					name="body"
					className="input-comment "
					value={newComment.body}
					onChange={({ target }) => setNewComment({ body: target.value })}
				/>
				<button className="my-button">Add</button>
			</form>
		</div>
	);
}

export default AddComment;
