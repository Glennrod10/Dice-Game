const ShowRules = ({showRules ,show, setShow}) => {
  return (
    <>
      <div className="text-center mt-3">
        <button className="btn btn-dark" onClick={showRules}>Show Rules</button>
      </div>
      {show ? <div className="bg-danger-subtle p-3 rounded mt-4">
        <div className="d-flex justify-content-between align-items-center"><h3 className="fw-bold">How to play dice game</h3> <i class="bi bi-x-lg h3 cursor-pointer" onClick={() =>setShow(false)}></i></div>
        
        <div className="">Select any number</div>
          <div>Click on dice image</div>
          <div>after click on  dice  if selected number is equal to dice number you will get same point as dice </div>
          <div>if you get wrong guess then  2 point will be dedcuted </div>
      </div> : null}
      
    </>
  )
}

export default ShowRules
