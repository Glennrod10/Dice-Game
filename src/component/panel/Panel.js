import {  List } from 'react-bootstrap-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';



const Panel = ({handleShow, show, handleClose, Logo}) => {
  const headerMenu = [
    {name: 'Menu' , link : '#'},
    {name: 'Location' , link : '#'},
    {name: 'About' , link : '#'},
    {name: 'Contact' , link : '#'},
  ]

  return (
    <div>
      <span role='button' onClick={handleShow}>
      <List size={32} />
      </span>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={Logo} alt="Nike logo" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="">
          {headerMenu.map((data) => (
            <div className='mb-3'>
              <a href={data.link} className='text-decoration-none text-dark h3'><span className=''>{data.name}</span></a>
            </div>
          ))}
        </div>
        <button className='btn btn-danger'>Login</button>
        </Offcanvas.Body>
      </Offcanvas>
      
    </div>
  )
}

export default Panel
