import React from "react";
import Sidebar from "../components/Sidebar";

function HomePage() {
	const isLoggedIn = !!localStorage.getItem("token");

	return (
		<div className="main">
			<h1 className="title">Welcome to Gallery application</h1>
			{isLoggedIn && (
				<div>
					<Sidebar />
				</div>
			)}
		</div>
	);
}

export default HomePage;
