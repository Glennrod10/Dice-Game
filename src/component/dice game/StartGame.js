import { Link } from "react-router-dom";

const StartGame = () => {
  return (
    <div className="container">
        <div className="row align-items-center">
          <div className="col-6"><img src='/images/dice-home.png' alt="" className="img-fluid" /></div>
          <div className="col-6">
            <div className="display-1 mb-4 fw-bold">Dice Game</div>
            <Link to='/play'><button className="btn btn-outline-dark">Play Now</button></Link>
            
          </div>
        </div>
    </div>
  )
}

export default StartGame;
