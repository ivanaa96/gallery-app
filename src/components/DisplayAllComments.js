import React from "react";
import { isAuthenticated, userSelector } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../store/gallery/slice";
import AddComment from "../components/AddComment";

function DisplayAllComments({ gallery }) {
	const isUserAuthenticated = useSelector(isAuthenticated);
	const activeUser = useSelector(userSelector);
	const dispatch = useDispatch();

	return (
		<div>
			{gallery && (
				<div>
					<h4>Comments:</h4>
					{gallery.comments?.length ? (
						<div>
							{gallery.comments.map((comment) => (
								<div key={comment.id} className="login-form ">
									{comment?.user && (
										<div>
											<small>Comment by: </small>
											<div className="result-input">
												{comment.user.first_name} {comment.user.last_name}
											</div>
										</div>
									)}
									<p className="result-input">
										{" "}
										Created at:{" "}
										{new Date(comment.created_at)
											.toISOString()
											.slice(0, 19)
											.replace("T", " ")}
									</p>
									<strong>
										<p>{comment.body}</p>
									</strong>
									{isUserAuthenticated && activeUser.id === comment.user_id && (
										<button
											onClick={() =>
												dispatch(
													deleteComment({
														comment: comment.id,
														gallery: gallery.id,
													})
												)
											}
											className="btn"
										>
											Delete comment
										</button>
									)}
								</div>
							))}
							<hr />
						</div>
					) : (
						<p>No comments</p>
					)}
				</div>
			)}

			{isUserAuthenticated && <AddComment galleryId={gallery.id} />}
		</div>
	);
}

export default DisplayAllComments;
