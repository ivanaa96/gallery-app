import HttpService from "./HttpService";

class UserService extends HttpService {
	async login(credentials) {
		const { data } = await this.client.post("login", credentials);
		const { token, user } = data;

		localStorage.setItem("token", token);
		return user;
	}

	async register(newUser) {
		const { data } = await this.client.post("register", newUser);
		const { token, user } = data;
		localStorage.setItem("token", token);

		return user;
	}

	async logout() {
		await this.client.post("logout");
		localStorage.removeItem("token");
	}

	async handleToken() {
		let token = localStorage.getItem("token");
		let decodedToken = atob(token.split(".")[1]);
		// console.log("Decoded Token", decodedToken);
		let currentDate = new Date();

		if (decodedToken.exp * 1000 < currentDate.getTime()) {
			console.log("Token expired.");
			this.client.post("refresh");
		} else {
			console.log("Valid token");
		}
	}
}

export default new UserService();
