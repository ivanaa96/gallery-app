import { createSlice } from "@reduxjs/toolkit";

const MiddlewareAction = {
	getGalleries: () => {},
	createGallery: () => {},
};

export const gallerySlice = createSlice({
	name: "gallery",
	initialState: {
		galleries: [],
		search: "",
		pageNo: 0,
		sortBy: null,
		createGalleryErrors: [],
	},
	reducers: {
		setGalleries(state, { payload }) {
			state.galleries = payload;
		},
		addSearch: (state, action) => {
			state.search = action.payload;
		},
		changePage: (state, action) => {
			state.pageNo += action.payload;
		},
		setCreateGalleryErrors(state, { payload }) {
			state.createGalleryErrors = payload;
		},
		setSort: (state, action) => {
			state.sortBy = action.payload;
		},
		...MiddlewareAction,
	},
});

export const {
	setGalleries,
	addSearch,
	changePage,
	createGallery,
	setCreateGalleryErrors,
	getGalleries,
	setSort,
} = gallerySlice.actions;
export default gallerySlice.reducer;
