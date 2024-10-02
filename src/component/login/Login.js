import { Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email ,setEmail] = useState('');
  const [password ,setPassword] = useState('');
  const [showAlert , setShowAlert] = useState(false);

  const submitData = (e) => {
    e.preventDefault();
    if (email === "glennrod10@gmail.com" && password === "password") {
      setShowAlert(true); // Show alert on successful login
    }
    else{
      setShowAlert(false)
    }
  }

  return (
    <>
      <div className="container">
        <section className="d-flex justify-content-center">
          <form onSubmit={submitData}>
            <div className="form-outline mb-4">
              <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <label className="form-label"  >Email address</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password"  className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              <label className="form-label" >Password</label>
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
              </div>

              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mb-4 w-100">Sign in</button>

            <div className="text-center">
              <p>Not a member? <Link to={'register'}>Register</Link></p>
            </div>
            {showAlert ? (
              <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
              <Alert.Heading>Login Successful!</Alert.Heading>
              <p>You have successfully logged in.</p>
            </Alert>
            ) :
            (
              <Alert variant="danger" dismissible onClose={() => setShowAlert(false)}>
              <Alert.Heading>Login Unscusseful!</Alert.Heading>
              <p>You have successfully logged in.</p>
            </Alert>
            )}
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;