import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { Modal } from "react-bootstrap"
import { XSquare } from "react-bootstrap-icons"
import { database } from "../../config/firebase";

const CtcModal = ({show, onHide, children}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // adding contact to database
  const addContacts = async (contacts) => {
    try {
      const contactRef = collection(database, 'contacts');
      await addDoc(contactRef,contacts)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addContacts({
      name:name,
      email:email
    }
    )
    onHide(true);
  }

  return (
    <div>
       <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header className="justify-content-between align-items-center" >
          <h4 className="mb-0">Add Your Contact</h4>
          <XSquare size={24} onClick={onHide} className="cursor-pointer"/>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control shadow-none" placeholder="Please enter your name"  value={name}  onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control shadow-none" placeholder="Please enter a valid email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <button className="btn btn-success w-100" type="submit">Add Contact</button>
          </form>

        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CtcModal
