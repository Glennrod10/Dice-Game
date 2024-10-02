import { useState } from 'react'
import ContactUs from '../images/Contact_us.jpg'
import { Alert } from 'react-bootstrap';

const Contact = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setdescription] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true)
  }
  return (
    <div className='container'>
      <h2>Contact us</h2>
      <p className=''>We're always here to help! Whether you have questions about our products, need assistance with your order, or want to provide feedback, please don't hesitate
      to contact us. You can reach us by email at <a href="mailto:test@gmail.com">test@gmail.com</a>, or by phone at 1234567890.</p>
      {showAlert ? <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
              <Alert.Heading>{Capitalize(name)} Thanks for contacting</Alert.Heading>
            </Alert> : null}

      <section className='my-5'>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className='email mb-3'>
                <label className='mb-1'>Email</label>
                <input type="email" className='form-control' placeholder='Please enter your email' onChange={(e) =>setEmail(e.target.value)} value={email}/>
              </div>
              <div className='name mb-3'>
                <label className='mb-1'>Name</label>
                <input type="text" className='form-control' placeholder='Please enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className='discription mb-4'>
                <label className='mb-1'>Description</label>
                <textarea name="description" placeholder='Please enter your description' rows={4} className='form-control' onChange={(e) => setdescription(e.target.value)} value={description}></textarea>
              </div>
              <button className='btn btn-success float-right' type='submit'> Submit</button>
            </form>
          </div>
          <div className="col-lg-6">
            <img src={ContactUs} alt="" className='img-fluid rounded'/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
