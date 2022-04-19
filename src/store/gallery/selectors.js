export const selectSearch = (state) => state.gallery.search;

export const selectGalleryPage = (state) => state.gallery.pageNo;

export const hasNextPage = (state) =>
	state.gallery.pageNo * 10 < state.gallery.galleries.length;

export const selectCreateGalleryErrors = (state) =>
	state.gallery.createGalleryErrors;

export const selectAllGalleries = (state) => state.gallery.galleries;

export const selectGalleriesDesc = (state) => {
	let galleries = [...state.gallery.galleries];
	const sortBy = state.gallery.sortBy;

	galleries = galleries
		.sort(
			(a, b) =>
				new Date(b.created_at).getTime - new Date(a.created_at).getTime()
		)
		.reverse();
	return galleries;
};
