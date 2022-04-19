import * as gallerySaga from "./gallery/saga";
import * as userSaga from "./user/saga";

const sagas = {
	...gallerySaga,
	...userSaga,
};

export default sagas;
