import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import galleryReducer from "./gallery/slice";

export default configureStore({
	reducer: { user: userReducer, gallery: galleryReducer },
});
