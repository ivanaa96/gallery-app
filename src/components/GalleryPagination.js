import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGalleryPage, hasNextPage } from "../store/gallery/selectors";
import { changePage } from "../store/gallery/slice";

function GalleryPagination() {
	const dispatch = useDispatch();

	const pageNo = useSelector(selectGalleryPage);
	const hasNext = useSelector(hasNextPage);

	return (
		<div>
			<nav>
				<ul className="pagination pagination-sm justify-content-center">
					<button
						className="page-item page-link button-pagination"
						disabled={pageNo < 1}
						onClick={() => dispatch(changePage(-1))}
					>
						&laquo;
					</button>
					<p className="button-pagination page-item page-link">{pageNo}</p>
					<button
						className="page-item page-link button-pagination"
						disabled={!hasNext}
						onClick={() => dispatch(changePage(1))}
					>
						&raquo;{" "}
					</button>
				</ul>
			</nav>
		</div>
	);
}

export default GalleryPagination;
