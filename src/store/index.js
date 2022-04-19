import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import galleryReducer from "./gallery/slice";
import sagas from "./rootSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
	reducer: { user: userReducer, gallery: galleryReducer },
	middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

for (let saga in sagas) {
	sagaMiddleware.run(sagas[saga]);
}
