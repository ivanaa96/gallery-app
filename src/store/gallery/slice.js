import { createSlice } from "@reduxjs/toolkit";

export const gallerySlice = createSlice({
	name: "gallery",
	initialState: {
		galleries: [],
	},
	reducers: {
		setGallery(state, { payload }) {
			state.galleries = payload;
		},
	},
});

export const { setGallery } = gallerySlice.actions;
export default gallerySlice.reducer;
