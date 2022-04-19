import { createSlice } from "@reduxjs/toolkit";

const middlewareAction = {
	getGalleries: () => {},
	createGallery: () => {},
};

export const gallerySlice = createSlice({
	name: "gallery",
	initialState: {
		galleries: [],
		searchValue: "",
		pageNo: 1,
	},
	reducers: {
		setGalleries(state, { payload }) {
			state.galleries = payload;
		},
		setSearchValue: (state, { payload }) => {
			state.searchValue = payload;
		},
		addGallery: (state, { payload }) => {
			state.galleries.push(payload);
		},
		changePage: (state, action) => {
			state.pageNo += action.payload;
		},

		...middlewareAction,
	},
});

export const { setGalleries, setSearchValue, addGallery, changePage } =
	gallerySlice.actions;
export default gallerySlice.reducer;
