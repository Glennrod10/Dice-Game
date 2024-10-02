import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container">
      <div className="h1 text-center mb-2">404 nothing found on this page </div>
      <div className="text-center">
        <Link to={'/'} className="btn btn-success" role="button">Go To HomePage</Link>
      </div>
      <div className="text-center">
        <img src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif' alt="" className="img-fluid" />
      </div>
    </div>
  )
}

export default NotFound
