import HttpService from "./HttpService";

class GalleryService extends HttpService {
	getAll = async () => {
		const token = localStorage.getItem("token");
		const { data } = await this.client.get("/", {
			headers: {
				Authorization: `Bearer ${token}`,
				"Access-Control-Allow-Origin": true,
			},
		});
		const realData = { data: data.data, lastPage: data.last_page };
		return realData;
	};

	getByFilter = async (payload) => {
		const { data } = await this.client.get(
			`/galleries?filter=${payload}`,
			payload
		);
		return data.data;
	};

	get = async (id) => {
		const { data } = await this.client.get(`/galleries/${id}`);
		return data;
	};

	store = async (newGallery) => {
		const { data } = await this.client.post("/create", newGallery);
		return data;
	};

	edit = async (gallery) => {
		const { data } = await this.client.put(
			`/edit-gallery/${gallery.gallery_id}`,
			gallery
		);
		return data;
	};

	delete = async (id) => {
		const { data } = await this.client.delete(`/galleries/${id}`);
		return data;
	};

	getMyGalleries = async () => {
		const { data } = await this.client.get("/my-galleries");
		return data;
	};

	getAuthorsGalleries = async (id) => {
		const { data } = await this.client.get(`/authors/${id}`);
		return data;
	};
}
export default new GalleryService();
