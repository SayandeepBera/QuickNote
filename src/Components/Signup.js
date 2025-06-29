import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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

      if (token.success === true) {
        // localStorage is a Web API that lets you store data in the browser
        localStorage.setItem('token', token.authtoken);

        // When login is successful then navigate to home page
        navigate('/');

        // show alert message after succesful login of user
        props.showAlert("Account is created Successfully", "success");

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
    <div className="container">
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" autoComplete="name" placeholder="Enter your name" aria-describedby="emailHelp" minLength={3} required onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" autoComplete="email" aria-describedby="emailHelp" required onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" autoComplete="current-password" id="password" minLength={5} required onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="cpassword" autoComplete="current-password" id="cpassword" minLength={5} required onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-primary">Sign up</button>
      </form>
    </div>
  )
}

export default Signup
