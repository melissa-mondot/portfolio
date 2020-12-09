import React, { useState } from "react";
import * as FirestoreService from "../../firebase/firestore";
import { useForm } from "react-hook-form";
import { StyledForm } from "./ContactFormStyle";
import { Modal } from "../atoms";

// TODO: notification upon new doc to collection
const ContactForm = () => {
  const { register } = useForm();
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);

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
  };

  const createMessage = (e) => {
    // e.preventDefault();
    const contactName = document.contactForm.contactName.value;
    const contactEmail = document.contactForm.contactEmail.value;
    const contactMsg = document.contactForm.contactMsg.value;

    FirestoreService.createMessage(contactName, contactEmail, contactMsg)
      .then(console.log("Message sent."))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal showModal={showModal}>
        <h2>Thanks for your message! I will get back to you very soon :)</h2>
      </Modal>
      <StyledForm
        className={showModal === false ? "showModal" : "hideModal"}
        name="contactForm"
        onSubmit={handleSubmit}
      >
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
          name="contactMsg"
          placeholder="I look forward to hearing from you ^_^"
          ref={register}
          onChange={updateInput}
          value={formData.contactMsg || ""}
        />

        <input type="submit" onClick={handleShowModal} />
      </StyledForm>
    </>
  );
};

export default ContactForm;
