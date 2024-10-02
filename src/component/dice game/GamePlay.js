import { useEffect, useState } from "react";
import Numbers from "./Numbers"
import RoleDice from "./RoleDice"
import Reset from "./Reset";
import ShowRules from "./ShowRules";
import ConfettiDice from "./ConfettiDice";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [count , setCount] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error , setError] = useState("");
  const [show , setShow] = useState(false);
  const [showConfetti ,setShowConfetti] = useState(false)

  const generateRandomDice = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
    }
    

    useEffect(() => {
      if (score ===5) {
        setShowConfetti(true)
        const showTime = setTimeout(() => {
          setShowConfetti(false)

        },4000)
        return () => clearTimeout(showTime)
      }

    }, [score])
    const roleDice = () => {
      if(!count) {
        setError('You have not selected number'); 
        return;
      }
      setError('');
      const randomNumbers = generateRandomDice(1,7);
      setCurrentDice((prev) => randomNumbers)

      
        if(count === randomNumbers) {
          setScore((prev) => prev +1)
        } else {
          setScore(score);
        }
      }
    
      const reset = () => {
        setScore(0);
        setCount('');
        setCurrentDice(1);
      }
      const showRules = () => {
        setShow(true);
      }

  return (
    <div className="container">
      <ConfettiDice showConfetti={showConfetti} />
      <div className="row align-items-center mb-5">
        <div className="col-lg-8 col-md-6">
          <div className="total-score fw-bold">
            <div className="display-2 fw-bold">{score}</div>
            <h3>Score</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <Numbers count={count} setCount={setCount} error={error}/>
        </div>
      </div>
      <RoleDice currentDice={currentDice} setCurrentDice={setCurrentDice} roleDice={roleDice}/>
      <Reset reset={reset} />
      <ShowRules showRules={showRules} show={show} setShow={setShow}/>
    </div>
  )
}

export default GamePlay
