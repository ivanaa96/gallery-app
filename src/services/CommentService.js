import HttpService from "./HttpService";

class CommentService extends HttpService {
	store = async (content) => {
		// console.log(content);
		const { data } = await this.client.post(
			`galleries/${content.id}/comments`,
			content.comment
		);
		return data;
	};
}
export default new CommentService();

//komentari 500 i prikaz jedne gaalerije: autor i fotografije
//gallerySearch ostaje rezultate pretrage kada se vratim na homepage
