import { call, put, takeLatest } from "redux-saga/effects";
import GalleryService from "../../services/GalleryService";
import CommentService from "../../services/CommentService";

import {
	setGalleries,
	getGalleries,
	createGallery,
	setCreateGalleryErrors,
	getGallery,
	setGallery,
	addComment,
	getComments,
} from "./slice";

function* handleCreateGallery(action) {
	try {
		const data = yield call(GalleryService.store, action.payload);
		if (action.payload.meta && action.payload.meta.onSuccess) {
			yield call(action.payload.meta.onSuccess);
		}
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

function* getGalleryByIdHandler(action) {
	try {
		const data = yield call(GalleryService.get, action.payload);
		yield put(setGallery(data));
	} catch (error) {
		console.log(error);
	}
}

function* createCommentHandler(action) {
	try {
		console.log(action.payload);
		const data = yield call(CommentService.store, action.payload);
		console.log("dodaj komentar", { data });
		yield put(addComment(data));
	} catch (error) {
		console.log(error);
	}
}

export function* watchForSaga() {
	yield takeLatest(createGallery.type, handleCreateGallery);
	yield takeLatest(getGalleries.type, getGalleriesHandler);
	yield takeLatest(getGallery.type, getGalleryByIdHandler);
	yield takeLatest(getComments.type, createCommentHandler);
}
