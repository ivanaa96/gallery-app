import React, { useState } from "react";
import UserService from "../services/UserService";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/slice";
import { useHistory } from "react-router-dom";

function Login({ onLogin }) {
	const [user, setUserData] = useState({
		email: "",
		password: "",
	});

	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const loggedUser = await UserService.login(user);
			dispatch(setUser(loggedUser));
			onLogin();
			history.push("/");
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit} className="login-form">
				<label htmlFor="email" className="col-form-label col-25">
					Email:
				</label>
				<br />
				<input
					className="form-control col-75"
					type="email"
					name="email"
					required
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
					required
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
