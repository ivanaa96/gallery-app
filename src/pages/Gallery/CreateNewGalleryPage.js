import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import GalleryService from "../../services/GalleryService";
import { useDispatch, useSelector } from "react-redux";

function CreateNewGalleryPage() {
	const [newGallery, setNewGallery] = useState({
		title: "",
		description: "",
	});

	const { id } = useParams();
	const history = useHistory();

	const [urlInput, setUrlInput] = useState([{ url: "" }]);

	const handleChange = (i, e) => {
		let newUrlInputFields = [...urlInput];
		newUrlInputFields[i][e.target.name] = e.target.value;
		setUrlInput(newUrlInputFields);
	};

	const addFormFields = () => {
		setUrlInput([...urlInput, { url: "" }]);
	};

	const removeFormFields = (i) => {
		let newUrlInputFields = [...urlInput];
		newUrlInputFields.splice(i, 1);
		setUrlInput(newUrlInputFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let data = null;

		if (id) {
			data = await GalleryService.edit(id, newGallery);
		} else {
			data = await GalleryService.store(newGallery);
		}

		if (!data) {
			alert("New gallery was not created successfully!");
			return;
		}
		history.push("/");
	};

	return (
		<div>
			<h2 className="title">
				{id ? "Edit your gallery" : "Create new gallery"}
			</h2>
			<form className="login-form" onSubmit={handleSubmit}>
				<label className="col-form-label col-25" htmlFor="title">
					Title:
				</label>
				<input
					type="text"
					className="form-control col-75"
					placeholder="Enter the title of the gallery..."
					name="title"
					required
					minLength={2}
					maxLength={255}
					value={newGallery.title}
					onChange={({ target }) =>
						setNewGallery({ ...newGallery, title: target.value })
					}
				/>
				<label className="col-form-label col-25" htmlFor="description">
					Description of the gallery:
				</label>
				<textarea
					className="form-control col-75"
					placeholder="Enter the description of the gallery..."
					name="description"
					maxLength={1000}
					value={newGallery.description}
					onChange={({ target }) =>
						setNewGallery({ ...newGallery, description: target.value })
					}
				/>

				{urlInput.map((element, index) => (
					<div key={index}>
						<label htmlFor="url" className="col-form-label col-25">
							Url of images:
						</label>
						<input
							type="text"
							placeholder="Enter the url of images..."
							className="form-control col-75"
							name="url"
							value={element.url}
							onChange={(e) => handleChange(index, e)}
						/>
						{index ? (
							<button
								type="button"
								className="btn"
								onClick={() => removeFormFields(index)}
							>
								Remove URL
							</button>
						) : null}
					</div>
				))}
				<button className="btn" type="button" onClick={() => addFormFields()}>
					Add more URLs...
				</button>
				<button className="gallery-form-button">
					{id ? "Edit" : "Submit"}
				</button>
			</form>
		</div>
	);
}

export default CreateNewGalleryPage;
