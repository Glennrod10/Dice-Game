


import Logo from '../images/brand_logo.svg';
import { useState } from 'react';
import Panel from './panel/Panel';
import { Link } from 'react-router-dom';

export function Header(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const headerMenu = [
    {name: 'Dice Game' , link : 'dice'},
    {name: 'Contact Book' , link : 'contact-book'},
    {name: 'About' , link : 'about'},
    {name: 'Contact' , link : 'contact'},
  ]

  
  return(
    <>
    <div className="container-fluid gx-0">
      <main className='p-3 border-bottom mb-5'>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-2 col-auto">
            <a href="/">
            <img src={Logo} alt="Nike logo" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 d-none d-md-block">
            <div className="menu">
              <div className="d-flex justify-content-between">
                {headerMenu.map((data) => (
                  <Link to={data.link} className='text-decoration-none text-dark'>
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 d-none d-md-block">
            <div className="float-end">
              <Link to={`login`}>
                <button className='btn btn-danger'>Login</button> 
              </Link>
            </div>
          </div>
          <div className='col-auto d-md-none '>
            <Panel show={show} handleShow={handleShow} handleClose={handleClose} Logo={Logo}/>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}