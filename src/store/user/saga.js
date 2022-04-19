import { call, put, takeLatest } from "redux-saga/effects";
import UserService from "../../services/UserService";
import {
	login,
	setToken,
	setErrors,
	register,
	logout,
	removeUser,
	setRegisterErrors,
} from "./slice";

function* handleLogin(action) {
	try {
		const data = yield call(UserService.login, action.payload.credentials);
		yield put(setToken(data.token));
		if (action.payload.meta && action.payload.meta.onSuccess) {
			yield call(action.payload.meta.onSuccess);
		}
		// action.payload.history.push("/");
	} catch (error) {
		yield put(setErrors(error.response.data.message));
	}
}

function* handleRegister(action) {
	try {
		const data = yield call(UserService.register, action.payload.registerUser);
		yield put(setToken(data.token));
		if (action.payload.meta && action.payload.meta.onSuccess) {
			yield call(action.payload.meta.onSuccess);
		}
	} catch (error) {
		const errors = [];
		Object.values(error.response.data.errors).map((error) =>
			errors.push(error)
		);
		yield put(setRegisterErrors(errors));
	}
}

function* handleLogout({ payload }) {
	try {
		yield call(UserService.logout);
		yield put(setToken(null));
		yield put(removeUser());
		if (payload.meta && payload.meta.onSuccess) {
			yield call(payload.meta.onSuccess);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* watchForSagas() {
	yield takeLatest(login.type, handleLogin);
	yield takeLatest(register.type, handleRegister);
	yield takeLatest(logout.type, handleLogout);
}
