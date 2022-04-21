import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComments } from "../store/gallery/slice";
import { selectCommentErrors } from "../store/gallery/selectors";
import CommentErrors from "../components/CommentErrors";
import { setCommentError } from "../store/gallery/slice";

function AddComment({ galleryId }) {
	const [newComment, setNewComment] = useState({ body: "" });
	const dispatch = useDispatch();

	const errors = useSelector(selectCommentErrors);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(createComments({ comment: newComment, id: galleryId }));
		dispatch(setCommentError());
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
			{errors && <CommentErrors error={errors} />}
		</div>
	);
}

export default AddComment;
