import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credential, setCredential] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  // Handle the signup credential
  const handleSignup = async (e) => {
    e.preventDefault();

    // When password is not match with confirm password
    if (credential.password !== credential.cpassword) {
      props.showAlert("Passwords do not match", "danger")
      return;
    }

    try {
      // fetch function
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: credential.name, email: credential.email, password: credential.password }),

      });

      const token = await response.json();
      console.log(token);

      if (token.success) {
        // localStorage is a Web API that lets you store data in the browser
        localStorage.setItem('token', token.authToken);

        // show alert message after succesful login of user
        props.showAlert(<span>Welcome, <strong>{credential.name.split(" ")[0]}!</strong> Your account was successfully created</span>, "success");

        // When login is successful then navigate to home page
        navigate('/');

      } else {
        props.showAlert("A user with this email already exists.", "danger")
      }

    } catch (error) {
        props.showAlert("Something went wrong in Sign up. Please try again.", "danger");
    }

  }

  // when write in title, description and tag field
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  }

  return (
    <div className="container col-md-8 rounded-4 mb-5" style={{marginTop : "150px", background : "rgb(234 234 234)", padding : "15px 25px"}}>
      <h2 className="text-center mb-5 fw-semibold" style={{fontFamily : "fangsong"}}>Create your account to get started with QuickNote</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{fontSize : "19px", fontFamily : "auto", fontWeight : "600"}}>Name</label>
          <input type="text" className="form-control" id="name" name="name" autoComplete="name" placeholder="Enter your name" aria-describedby="emailHelp" minLength={3} required onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{fontSize : "19px", fontFamily : "auto", fontWeight : "600"}}>Email address</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" autoComplete="email" aria-describedby="emailHelp" required onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" style={{fontSize : "19px", fontFamily : "auto", fontWeight : "600"}}>Password</label>
          <input type="password" className="form-control" name="password" autoComplete="current-password" id="password" minLength={5} placeholder="Enter your password" required onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" style={{fontSize : "19px", fontFamily : "auto", fontWeight : "600"}}>Confirm Password</label>
          <input type="password" className="form-control" name="cpassword" autoComplete="current-password" id="cpassword" minLength={5} placeholder="Re-Enter your password" required onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-primary">Sign up</button>

        <p className="text-center mt-3">Already have an account ? 
            <Link to="/login" className="mx-2" style={{textDecoration : "none"}}>
                Sign in
            </Link>
        </p>
      </form>
    </div>
  )
}

export default Signup
