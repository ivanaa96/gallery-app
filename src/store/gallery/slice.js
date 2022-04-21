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
};

export const gallerySlice = createSlice({
	name: "gallery",
	initialState: {
		galleries: [],
		search: "",
		pageNo: 1,
		sortBy: null,
		createGalleryErrors: [],
		gallery: {},
		myGalleries: [],
		AuthorsGalleries: [],
		commentErrors: "",
	},
	reducers: {
		setGalleries(state, { payload }) {
			state.galleries = payload;
		},
		addSearch: (state, action) => {
			state.search = action.payload;
		},
		loadMoreGalleries: (state) => {
			state.pageNo += 1;
		},
		setCreateGalleryErrors(state, { payload }) {
			state.createGalleryErrors = payload;
		},
		setSort: (state, action) => {
			state.sortBy = action.payload;
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
		...MiddlewareAction,
	},
});

export const {
	setGalleries,
	addSearch,
	loadMoreGalleries,
	createGallery,
	setCreateGalleryErrors,
	getGalleries,
	setSort,
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
} = gallerySlice.actions;

export default gallerySlice.reducer;
