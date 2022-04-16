import React, { useState } from "react";
import UserService from "../services/UserService";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/slice";
import { useHistory } from "react-router-dom";

function Login() {
	const [user, setUserData] = useState({
		email: "",
		password: "",
	});

	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const loggedUser = await UserService.login(user);
		dispatch(setUser(loggedUser));
		history.push("/posts");
	};

	return (
		<div className="container">
			<h2>Login</h2>
			<form onSubmit={handleSubmit} className="form-group">
				<label htmlFor="email" className="col-form-label col-25">
					Email:
				</label>
				<br />
				<input
					className="form-control col-75"
					type="email"
					name="email"
					placeholder="Enter your email address..."
					value={user.email}
					onChange={({ target }) =>
						setUserData({ ...user, email: target.value })
					}
				/>

				<label htmlFor="password" className="col-form-label col-25">
					Password:
				</label>
				<br />
				<input
					className="form-control col-75"
					type="password"
					name="password"
					placeholder="Enter your password..."
					value={user.password}
					onChange={({ target }) =>
						setUserData({ ...user, password: target.value })
					}
				/>
				<button className="my-button">Login</button>
			</form>
		</div>
	);
}

export default Login;
