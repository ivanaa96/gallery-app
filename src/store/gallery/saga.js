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
	createComments,
	setMyGalleries,
	getMyGalleries,
	setAuthorsGalleries,
	getAuthorsGalleries,
	deleteCommentFromGallery,
	deleteComment,
	setCommentError,
	deleteGalleryMethod,
	deleteGallery,
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
		const data = yield call(CommentService.store, action.payload);
		yield put(addComment(data));
	} catch (error) {
		yield put(setCommentError(error.response.data.message));
	}
}

function* getMyGalleriesHandler() {
	try {
		const data = yield call(GalleryService.getMyGalleries);
		yield put(setMyGalleries(data));
	} catch (error) {
		console.log(error);
	}
}

function* getAuthorsGalleriesHandler(action) {
	try {
		const data = yield call(GalleryService.getAuthorsGalleries, action.payload);
		yield put(setAuthorsGalleries(data));
	} catch (error) {
		console.log(error);
	}
}

function* deleteCommentHandler(action) {
	const response = prompt(
		"Are you sure you want to delete this comment ?\n Enter 'Yes' if you are"
	);

	if (response === "Yes") {
		try {
			const data = yield call(CommentService.delete, action.payload);
			yield put(deleteCommentFromGallery(data));
		} catch (error) {
			console.log(error);
		}
	}
}

function* deleteGalleryHandler(action) {
	const response = prompt(
		"Are you sure you want to delete this gallery ?\n Enter 'Yes' if you are"
	);

	if (response === "Yes") {
		try {
			const data = yield call(GalleryService.delete, action.payload);
			yield put(deleteGallery());
		} catch (error) {
			console.log(error);
		}
	}
}

export function* watchForSaga() {
	yield takeLatest(createGallery.type, handleCreateGallery);
	yield takeLatest(getGalleries.type, getGalleriesHandler);
	yield takeLatest(getGallery.type, getGalleryByIdHandler);
	yield takeLatest(createComments.type, createCommentHandler);
	yield takeLatest(getMyGalleries.type, getMyGalleriesHandler);
	yield takeLatest(getAuthorsGalleries.type, getAuthorsGalleriesHandler);
	yield takeLatest(deleteComment.type, deleteCommentHandler);
	yield takeLatest(deleteGalleryMethod.type, deleteGalleryHandler);
}
