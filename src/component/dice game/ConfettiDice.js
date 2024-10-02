import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti'

const ConfettiDice = ({showConfetti}) => {

  const { width, height } = useWindowSize();
  return (
    <div>
      {showConfetti && <Confetti
      width={width}
      height={height}
    />  }
      
    </div>
  )
}

export default ConfettiDice
