import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { PlusCircle, Search } from 'react-bootstrap-icons';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { database } from '../../config/firebase';
import ContactCard from './ContactCard';
import CtcModal from './CtcModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactBook = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]); // New state for filtered contacts
  const [searchTerm, setSearchTerm] = useState(''); // State to track the search input
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null); // New state to track selected contact

  const isClose = () => {
    setIsOpen(false);
    setSelectedContact(null); // Reset selected contact when modal closes
  };

  // Get data from Firebase database
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(database, 'contacts');
        const snapShot = await getDocs(contactRef);
        const contactsList = snapShot.docs.map((data) => ({
          id: data.id,
          ...data.data(),
        }));
        setContacts(contactsList);
        setFilteredContacts(contactsList); // Initialize filtered contacts with full contact list
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  // Update contact function
  const updateContact = async (id, updatedContact) => {
    try {
      const contactRef = doc(database, 'contacts', id);
      await updateDoc(contactRef, updatedContact);
      const updatedContacts = contacts.map((contact) =>
        contact.id === id ? { id, ...updatedContact } : contact
      );
      toast.success('Contact Updated Successfully');
      setContacts(updatedContacts); // Update state with new contact details
      setFilteredContacts(updatedContacts); // Also update filtered contacts
    } catch (error) {
      console.log(error);
    }
  };

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    
    // Filter contacts based on the search term
    const filtered = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(value) ||
        contact.email.toLowerCase().includes(value)
    );
    setFilteredContacts(filtered);
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mt-3">
            <Search className="position-absolute ms-2" />
            <input
              onChange={handleSearch} // Handle search input changes
              type="text"
              name="search"
              value={searchTerm} // Bind input value to state
              className="form-control shadow-none ps-5"
              placeholder="Search Contact"
            />
            <button
              className="btn"
              onClick={() => {
                setIsOpen(true);
                setSelectedContact(null); // For adding a new contact
              }}
            >
              <PlusCircle size={32} />
            </button>
          </div>
        </div>

        {/* Display filtered contacts */}
        {filteredContacts.map((data) => (
          <ContactCard
            key={data.id}
            data={data}
            onEdit={() => {
              setSelectedContact(data);
              setIsOpen(true); // Open modal for editing
            }}
            setContacts={setContacts} // Pass setContacts to delete the contact and update the state
          />
        ))}

        {isOpen && (
          <CtcModal
            show={isOpen}
            onHide={isClose}
            contact={selectedContact} // Pass contact data if editing
            updateContact={updateContact} // Pass update function
            setContacts={setContacts} // Pass setContacts to add new contact directly
          />
        )}
      </div>
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
};

export default ContactBook;
