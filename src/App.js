import "./styles/App.css";
import Layout from "./pages/Layout";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "./store/user/selectors";
import { getActiveUser } from "./store/user/slice";

function App() {
	const dispatch = useDispatch();

	const isUserAuthenticated = useSelector(isAuthenticated);
	useEffect(() => {
		if (isUserAuthenticated) {
			dispatch(getActiveUser());
		}
	}, [isUserAuthenticated]);

	return (
		<div className="App">
			<Layout />
		</div>
	);
}

export default App;
