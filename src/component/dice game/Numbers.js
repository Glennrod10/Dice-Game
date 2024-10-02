const Numbers = ({error, count, setCount}) => {
  const number = [1,2,3,4,5,6];
  return (
    <>
    <h6>Please select a number</h6>
    <div className="my-3">
      <div className="d-flex justify-content-between">
        {number.map((data, i) => (
        <button className={`px-4 py-3 fw-bold btn btn-outline-dark me-md-2 ${count === i+1 && 'active'}`} key={i} onClick={() => setCount(i+1)}>{data}</button>
      ))}
      </div>
    </div>
      <p className="text-danger">{error}</p>
      {count ? <div className="h5">Selected number is: {count}</div> : null}
      
    </>
  )
}

export default Numbers
