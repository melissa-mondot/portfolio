import React, { useState, useRef } from "react";
import * as FirestoreService from "../../firebase/firestore";
import { useForm } from "react-hook-form";
import { StyledForm, ThankYouModal, HiddenModal } from "./ContactFormStyle";
import { useOnClickOutside } from "../../hooks";

// TODO: notification upon new doc to collection
const ContactForm = () => {
	const { register } = useForm();
	const [formData, setFormData] = useState({});
	const [modalOpen, setModalOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setModalOpen(false));

	const updateInput = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		createMessage();
		setFormData({
			name: "",
			email: "",
			message: "",
		});
		handleModalOpen();
	};

	const handleModalOpen = () => {
		setModalOpen(true);
		console.log("modal invoked");
	};
	// const handleModalClose = () => {
	// 	setModalOpen(false);
	// };

	const createMessage = (e) => {
		// e.preventDefault();
		const contactName = document.contactForm.contactName.value;
		const contactEmail = document.contactForm.contactEmail.value;
		const contactMessage = document.contactForm.contactMessage.value;

		FirestoreService.createMessage(contactName, contactEmail, contactMessage)
			.then(console.log("Message sent."))
			.catch((err) => console.log(err));
	};
	// const messageComplete = (e) => {};

	return (
		<>
			<div ref={node}>
				{modalOpen === true ? (
					<ThankYouModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
						<p>
							Thank you for your message!
							<br />I will get back to you ASAP! (:
						</p>
					</ThankYouModal>
				) : (
					<HiddenModal></HiddenModal>
				)}
			</div>
			<StyledForm name="contactForm" onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type="text"
					name="contactName"
					ref={register}
					onChange={updateInput}
					value={formData.contactName || ""}
				/>
				<label>Email</label>
				<input
					type="email"
					name="contactEmail"
					ref={register({ required: true })}
					onChange={updateInput}
					value={formData.contactEmail || ""}
				/>
				<label>Message</label>
				<textarea
					name="contactMessage"
					placeholder="I look forward to hearing from you ^_^"
					ref={register}
					onChange={updateInput}
					value={formData.contactMessage || ""}
				/>

				<input type="submit" />
			</StyledForm>
		</>
	);
};

export default ContactForm;
