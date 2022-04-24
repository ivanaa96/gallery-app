export const selectCreateGalleryErrors = (state) =>
	state.gallery.createGalleryErrors;

export const selectAllGalleries = (state) => state.gallery.galleries;

export const selectGalleryById = (state) => state.gallery.gallery;

export const selectMyGalleries = (state) => state.gallery.myGalleries;

export const selectAuthorsGalleries = (state) => state.gallery.AuthorsGalleries;

export const selectCommentErrors = (state) => state.gallery.commentErrors;

export const selectLastPage = (state) => state.gallery.lastPage + 1;

export const selectFilteredGalleries = (state) => state.gallery.filterGalleries;

export const selectFilter404 = (state) => state.gallery.filter404;
