import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		email: "",
		password: "",
	},
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
	},
});

export const { serUser } = userSlice.actions;
export default userSlice.reducer;
