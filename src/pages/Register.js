import React, { useState } from "react";
import UserService from "../services/UserService";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/slice";
import { useHistory } from "react-router-dom";

function Register({ onRegister }) {
	const [newUser, setNewUser] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		password_confirmation: "",
		terms_and_conditions: true,
	});

	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const { data } = await UserService.register(newUser);
			dispatch(setUser(data));
			onRegister();
			history.push("/");
		} catch (error) {
			const errors = [];
			Object.values(error.response.data.errors).map((error) =>
				errors.push(error)
			);
			alert(errors.map((error) => error + "\n"));
			return;
		}
	};

	return (
		<div className="container">
			<h2>Register:</h2>
			<form className="form-group" onSubmit={handleSubmit}>
				<label className="col-form-label col-25" htmlFor="first_name">
					First name:
				</label>
				<br />
				<input
					type="text"
					name="first_name"
					className="form-control col-75"
					placeholder="Enter your first name..."
					value={newUser.first_name}
					onChange={({ target }) =>
						setNewUser({ ...newUser, first_name: target.value })
					}
					required
				/>

				<label className="col-form-label col-25" htmlFor="last_name">
					Last name:
				</label>
				<br />
				<input
					type="text"
					name="last_name"
					className="form-control col-75"
					placeholder="Enter your last name..."
					required
					value={newUser.last_name}
					onChange={({ target }) =>
						setNewUser({ ...newUser, last_name: target.value })
					}
				/>
				<label htmlFor="email" className="col-form-label col-25">
					Email:
				</label>
				<br />
				<input
					className="form-control col-75"
					type="email"
					name="email"
					placeholder="Enter your email..."
					required
					value={newUser.email}
					onChange={({ target }) =>
						setNewUser({ ...newUser, email: target.value })
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
					required
					minLength={8}
					value={newUser.password}
					onChange={({ target }) =>
						setNewUser({ ...newUser, password: target.value })
					}
				/>
				<br />

				<label
					htmlFor="password_confirmation"
					className="col-form-label col-25"
				>
					Confirm your password:
				</label>
				<br />
				<input
					className="form-control col-75"
					type="password"
					name="password_confirmation"
					placeholder="Confirm your password..."
					required
					value={newUser.password_confirmation}
					onChange={({ target }) =>
						setNewUser({ ...newUser, password_confirmation: target.value })
					}
				/>
				<br />

				<input
					type="checkbox"
					name="terms_and_conditions"
					className="col-form-label col-75"
					value={1}
					required
					onChange={({ target }) =>
						setNewUser({ ...newUser, terms_and_conditions: target.value })
					}
				/>
				<label
					htmlFor="terms_and_conditions"
					className="col-form-label col-25 custom"
				>
					I accept terms and conditions.
				</label>

				<br />
				<button className="my-button">Register</button>
			</form>
		</div>
	);
}

export default Register;
