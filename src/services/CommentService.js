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

	delete = async (content) => {
		const { data } = await this.client.delete(
			`/galleries/${content.gallery}/comments/${content.comment}`
		);
		return content.comment;
	};
}
export default new CommentService();
