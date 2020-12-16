import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as FirestoreService from '../../firebase/firestore';

import { StyledForm } from './ContactFormStyle';
import { Modal } from '../atoms';

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

  const createMessage = () => {
    const contactName = document.contactForm.contactName.value;
    const contactEmail = document.contactForm.contactEmail.value;
    const contactMsg = document.contactForm.contactMsg.value;

    FirestoreService.createMessage(contactName, contactEmail, contactMsg)
      .then(console.log('Message sent.'))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createMessage();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <Modal showModal={showModal}>
        <h2>Thanks for your message! I will get back to you very soon :)</h2>
      </Modal>
      <StyledForm
        className={showModal === false ? 'showModal' : 'hideModal'}
        name="contactForm"
        onSubmit={handleSubmit}
      >
        <p>
          Questions, gigs, or just want to connect? Send me a message!
          <br />
          <small>
            This uses <a href="https://firebase.google.com/docs/firestore/">Cloud Firestore</a>, a
            very cool part of{' '}
            <a href="https://firebase.google.com/">Google`&apos s mobile platform</a>
          </small>
        </p>
        <label htmlFor="contactName">
          Name
          <input
            required
            id="contactName"
            type="text"
            name="contactName"
            ref={register}
            onChange={updateInput}
            value={formData.contactName || ''}
          />
        </label>
        <label htmlFor="contactEmail">
          Email
          <input
            required
            id="contactEmail"
            type="email"
            name="contactEmail"
            ref={register({ required: true })}
            onChange={updateInput}
            value={formData.contactEmail || ''}
          />
        </label>
        <label htmlFor="contactMsg">
          Message
          <textarea
            required
            id="contactMsg"
            type="text"
            name="contactMsg"
            ref={register}
            onChange={updateInput}
            value={formData.contactMsg || ''}
          />
        </label>
        <input type="submit" onClick={handleShowModal} />
      </StyledForm>
    </>
  );
};

export default ContactForm;
