import { createSlice } from "@reduxjs/toolkit";

const MiddlewareAction = {
	getGalleries: () => {},
	createGallery: () => {},
	getGallery: () => {},
	createComments: () => {},
	getMyGalleries: () => {},
	getAuthorsGalleries: () => {},
	deleteComment: () => {},
	deleteGalleryMethod: () => {},
	updateGalleryMethod: () => {},
	getFilteredGalleries: () => {},
	changeNextPageUrl: () => {},
};

export const gallerySlice = createSlice({
	name: "gallery",
	initialState: {
		galleries: [],
		pageNo: 1,
		createGalleryErrors: [],
		gallery: {},
		myGalleries: [],
		AuthorsGalleries: [],
		commentErrors: "",
		filterGalleries: [],
		filter404: "",
		nextPageUrl: "",
	},
	reducers: {
		setGalleries(state, { payload }) {
			state.galleries = payload;
		},
		setCreateGalleryErrors(state, { payload }) {
			state.createGalleryErrors = payload;
		},
		setGallery: (state, action) => {
			state.gallery = action.payload;
		},
		addComment: (state, action) => {
			state.gallery.comments.push(action.payload);
		},
		setMyGalleries: (state, action) => {
			state.myGalleries = action.payload;
		},
		setAuthorsGalleries: (state, action) => {
			state.AuthorsGalleries = action.payload;
		},
		deleteCommentFromGallery: (state, action) => {
			state.gallery.comments = state.gallery.comments.filter(
				(comment) => comment.id !== action.payload
			);
		},
		setCommentError: (state, action) => {
			state.commentErrors = action.payload;
		},
		deleteGallery: (state) => {
			state.gallery = {};
		},
		setFilterGalleries: (state, { payload }) => {
			state.filterGalleries = payload;
		},
		setFilter404: (state, { payload }) => {
			state.filter404 = payload;
		},
		setNextPageUrl: (state, action) => {
			state.nextPageUrl = action.payload;
		},
		...MiddlewareAction,
	},
});

export const {
	setGalleries,
	createGallery,
	setCreateGalleryErrors,
	getGalleries,
	getGallery,
	setGallery,
	createComments,
	addComment,
	getMyGalleries,
	setMyGalleries,
	setAuthorsGalleries,
	getAuthorsGalleries,
	deleteComment,
	deleteCommentFromGallery,
	setCommentError,
	deleteGalleryMethod,
	deleteGallery,
	updateGalleryMethod,
	setFilterGalleries,
	getFilteredGalleries,
	setFilter404,
	setNextPageUrl,
	changeNextPageUrl,
} = gallerySlice.actions;

export default gallerySlice.reducer;
