import { addDoc, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { XSquare } from 'react-bootstrap-icons';
import { database } from '../../config/firebase';
import { toast } from 'react-toastify';

const CtcModal = ({ show, onHide, contact, updateContact, setContacts }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Set form data when contact prop changes (for editing)
  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [contact]);

  // adding contact to the database
  const addContacts = async (newContact) => {
    try {
      const contactRef = collection(database, 'contacts');
      const docRef = await addDoc(contactRef, newContact);
      
      // Add the new contact to the state directly
      setContacts((prevContacts) => [
        ...prevContacts,
        { id: docRef.id, ...newContact }, 
      ]);
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      name: name,
      email: email,
    };

    if (contact) {
      // If contact exists, update the contact
      updateContact(contact.id, contactData);
    } else {
      // Else, add a new contact
      addContacts(contactData);
    }
    onHide();
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="justify-content-between align-items-center">
          <h4 className="mb-0">{contact ? 'Update Contact' : 'Add Your Contact'}</h4>
          <XSquare size={24} onClick={onHide} className="cursor-pointer" />
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Please enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control shadow-none"
                placeholder="Please enter a valid email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="btn btn-success w-100" type="submit">
              {contact ? 'Update Contact' : 'Add Contact'}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CtcModal;
