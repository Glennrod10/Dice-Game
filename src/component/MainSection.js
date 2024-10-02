import NikeShoe from '../images/Nike_zoom.jpg'
import { SiFlipkart } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";

export function MainSection(){
  return(
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <h1 className='display-1 fw-bolder mb-4'>YOUR FEET DESERVE THE BEST</h1>
          <p className='mb-4'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className="mb-5">
            <button className='btn btn-danger me-4'>Shop now</button>
            <button className='btn btn-outline-secondary'>Category</button>
          </div>
            <h6>Also Available on</h6>
            <SiFlipkart size={32} color='yellow'/>
            <FaAmazon  size={32}/>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <img src={NikeShoe} alt="Nike shoe" className='img-fluid' />
        </div>
      </div>
    </div>
    </>
  )
}