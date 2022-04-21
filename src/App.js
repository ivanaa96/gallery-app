import "./styles/App.css";
import Layout from "./pages/Layout";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isAuthenticated } from "./store/user/selectors";
import { getActiveUser } from "./store/user/slice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (isAuthenticated) {
			dispatch(getActiveUser()); // akcija, hvata se sagom, salje request get /api/my-profile koji vraca obj ulogovanog korisnika, i setuje usera na userslice
		}
	});

	return (
		<div className="App">
			<Layout />
		</div>
	);
}

export default App;
