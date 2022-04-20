import { createSlice } from "@reduxjs/toolkit";

const MiddlewareAction = {
	getGalleries: () => {},
	createGallery: () => {},
	getGallery: () => {},
	getComments: () => {},
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
		comments: [],
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
			console.log("dodajem komentar", { state, action });
			console.log(state.comments);
			state.gallery.comments.push(action.payload);
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
	getComments,
	addComment,
} = gallerySlice.actions;
export default gallerySlice.reducer;
