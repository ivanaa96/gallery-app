import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: {},
		isAuthenticated: false,
	},
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
			state.isAuthenticated = true;
		},
		removeUser(state) {
			state.user = {};
			state.isAuthenticated = false;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
