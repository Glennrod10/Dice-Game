import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { PlusCircle , Search ,PersonCircle, PencilSquare, Trash } from 'react-bootstrap-icons';  
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../config/firebase';
import ContactCard from './ContactCard';
import CtcModal from './CtcModal';

const ContactBook = () => {

  const [contacts,  setContacts] = useState([]);
  const [isopen,  setIsOpen] = useState(false);
  const isclose =() => {
    setIsOpen(false);
  }

  //get data from firebase database
  useEffect(() => {

    const getContacts = async () => {
      try {
        const contactRef = collection(database, "contacts");
        const snapShot = await getDocs(contactRef);
        const contactsList = snapShot.docs.map((data) => {
          return {
            id: data.id,
            ...data.data()
          }
        })
        setContacts(contactsList);
      } catch (error) {
        
      }
    }
    getContacts()

  } , [])

  return (
    <div className='container'>
      <Navbar />
      <div className='mb-3'>
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <Search className='position-absolute ms-2'/>
          <input type="text" name="search" id="" className='form-control shadow-none ps-5' placeholder='Search Contact' />
          <button className='btn' onClick={() => setIsOpen(true)}><PlusCircle size={32} /></button>
        </div>
      </div>
        {contacts.map((data) => (
          <ContactCard key={data.id} data={data}/>
        ))}

        {isopen && <CtcModal show={isopen} onHide={isclose} />}
    </div>
  )
}

export default ContactBook
