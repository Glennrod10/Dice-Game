const RoleDice = ({currentDice, setCurrentDice, generateRandomDice, roleDice}) => {

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center " >
        <div className="cursor-pointer">
          <img src={`/images/dice/dice_${currentDice}.png`} alt="" className="img-fluid" onClick={roleDice} />
        </div>
        <div>Click on dice to roll</div>
        
      </div>
    </div>
  )
}

export default RoleDice
