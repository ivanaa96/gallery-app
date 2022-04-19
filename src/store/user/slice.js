import { createSlice } from "@reduxjs/toolkit";

const MiddlewareActions = {
	login: () => {},
	register: () => {},
	logout: () => {},
};

const token = localStorage.getItem("token");

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: {},
		token: token,
		loginErrors: [],
		registerErrors: [],
	},
	reducers: {
		setToken(state, action) {
			state.token = action.payload;
			state.isAuthenticated = true;
		},
		removeUser(state) {
			state.user = {};
		},
		setErrors(state, action) {
			state.loginErrors = action.payload;
		},
		setRegisterErrors(state, { payload }) {
			state.registerErrors = payload;
		},
		...MiddlewareActions,
	},
});

export const {
	setToken,
	removeUser,
	login,
	setErrors,
	register,
	logout,
	setRegisterErrors,
} = userSlice.actions;
export default userSlice.reducer;
