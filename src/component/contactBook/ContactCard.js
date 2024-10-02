import { deleteDoc, doc } from 'firebase/firestore';
import { PersonCircle, PencilSquare, Trash } from 'react-bootstrap-icons';
import { database } from '../../config/firebase';
import { toast } from 'react-toastify';

const ContactCard = ({ data, onEdit, setContacts }) => {
  // deleting data from database
  const deleteContacts = async (id) => {
    try {
      // Delete the document from Firestore
      await deleteDoc(doc(database, 'contacts', id));
      
      // Update the state to reflect the deleted contact
      setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-warning-subtle rounded p-3 mb-2" key={data.id}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="profile d-flex align-items-center">
          <PersonCircle size={32} className="me-4 text-warning" />
          <div>
            {data.name}
            <div>{data.email}</div>
          </div>
        </div>
        <div className="delete-edit">
          <PencilSquare size={32} className="me-4 cursor-pointer" onClick={onEdit} />
          <Trash
            size={32}
            className="text-danger cursor-pointer"
            onClick={() => deleteContacts(data.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
