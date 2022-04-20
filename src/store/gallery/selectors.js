export const selectSearch = (state) => state.gallery.search;

export const selectGalleryPageNo = (state) => state.gallery.pageNo;

export const selectCreateGalleryErrors = (state) =>
	state.gallery.createGalleryErrors;

export const selectAllGalleries = (state) => state.gallery.galleries;
export const selectGalleryById = (state) => state.gallery.gallery;
