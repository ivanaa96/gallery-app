export const searchValueSelector = (state) => state.gallery.searchValue;

export const galleriesSelector = (state) => {
	const filter = state.gallery.searchValue;
	const galleries = state.gallery.galleries;

	return galleries.filter((gallery) => gallery.title.includes(filter));
};

export const selectGalleryPage = (state) => state.gallery.pageNo;

export const hasNextPage = (state) =>
	state.gallery.pageNo * 10 < state.gallery.galleries.length;
