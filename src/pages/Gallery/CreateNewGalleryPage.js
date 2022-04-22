import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCreateGalleryErrors } from "../../store/gallery/selectors";
import CreateGalleryError from "../../components/CreateGalleryError";
import {
	createGallery,
	setCreateGalleryErrors,
	updateGalleryMethod,
} from "../../store/gallery/slice";

function CreateNewGalleryPage() {
	const [newGallery, setNewGallery] = useState({
		title: "",
		description: "",
	});

	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const errors = useSelector(selectCreateGalleryErrors);

	const [urlList, setUrlList] = useState([{ url: "" }]);

	const handleAddInputField = () => {
		setUrlList([...urlList, { url: "" }]);
	};

	const handleUrlChange = (i, e) => {
		const list = [...urlList];
		list[i][e.target.name] = e.target.value;
		setUrlList(list);
	};

	const removeInputField = (index) => {
		const list = [...urlList];
		list.splice(index, 1);
		setUrlList(list);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch(
			createGallery({
				...newGallery,
				image_urls: urlList,
				meta: {
					onSuccess: () => {
						history.replace("/");
					},
				},
			})
		);

		dispatch(setCreateGalleryErrors());
	};

	const handleEdit = async (event) => {
		event.preventDefault();
		dispatch(
			updateGalleryMethod({
				galleryData: {
					...newGallery,
					image_urls: urlList,
					gallery_id: id,
				},
				ifSuccessful: {
					meta: {
						onSuccess: () => {
							history.replace(`/galleries/${id}`);
						},
					},
				},
			})
		);

		dispatch(setCreateGalleryErrors());
	};

	const handleRedirectToHomepage = () => {
		history.push("/my-galleries");
	};

	const reorderList = (event, originalUrlList) => {
		const movedItem = originalUrlList.find(
			(item, index) => index === event.oldIndex
		);
		const remainingItems = originalUrlList.filter(
			(item, index) => index !== event.oldIndex
		);

		const reorderedItems = [
			...remainingItems.slice(0, event.newIndex),
			movedItem,
			...remainingItems.slice(event.newIndex),
		];

		return reorderedItems;
	};

	function changeOrder(index, direction) {
		setUrlList(
			reorderList(
				{ oldIndex: index, newIndex: index + (direction === "UP" ? -1 : 1) },
				urlList
			)
		);
	}

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
				<label htmlFor="url" className="col-form-label col-25">
					Url of images:
				</label>

				{urlList.map((urlElement, index) => (
					<div key={index}>
						<input
							type="text"
							placeholder="Enter the url of images..."
							className="form-control col-75"
							name="url"
							value={urlElement.url}
							onChange={(e) => handleUrlChange(index, e)}
						/>

						{urlList.length > 1 && (
							<div>
								<button
									type="button"
									className="btn"
									onClick={() => removeInputField(index)}
								>
									Remove URL
								</button>
								<button
									type="button"
									className="btn"
									onClick={() => changeOrder(index, "UP")}
								>
									Move Up
								</button>
								<button
									type="button"
									className="btn"
									onClick={() => changeOrder(index, "DOWN")}
								>
									Move Down
								</button>
							</div>
						)}

						{urlList.length - 1 === index && (
							<button
								type="button"
								className="btn"
								onClick={handleAddInputField}
							>
								Add new url
							</button>
						)}
					</div>
				))}

				{id && (
					<button onClick={handleEdit} className="gallery-form-button">
						Edit
					</button>
				)}

				<button className="gallery-form-button">Submit</button>
				<br />
				<button
					onClick={handleRedirectToHomepage}
					className="gallery-form-button"
				>
					Cancel
				</button>
			</form>
			{errors && <CreateGalleryError error={errors} />}
		</div>
	);
}

export default CreateNewGalleryPage;
