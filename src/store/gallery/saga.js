import { call, put, takeLatest } from "redux-saga/effects";
import GalleryService from "../../services/GalleryService";
import {
	setGalleries,
	getGalleries,
	createGallery,
	setCreateGalleryErrors,
} from "./slice";

function* handleCreateGallery(action) {
	try {
		const data = yield call(GalleryService.store, action.payload);
		yield put(setGalleries(data));
	} catch (error) {
		const errors = [];
		Object.values(error.response.data.errors).map((error) =>
			errors.push(error)
		);
		yield put(setCreateGalleryErrors(errors));
	}
}

function* getGalleriesHandler() {
	try {
		const data = yield call(GalleryService.getAll);
		yield put(setGalleries(data));
	} catch (error) {
		console.log(error);
	}
}

export function* watchForSaga() {
	yield takeLatest(createGallery.type, handleCreateGallery);
	yield takeLatest(getGalleries.type, getGalleriesHandler);
}
