import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Handle the login credential
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: credential.email, password: credential.password }),

      });

      const token = await response.json();
      console.log(token);

      if (token.success === true) {
        // localStorage is a Web API that lets you store data in the browser
        localStorage.setItem('token', token.authtoken);

        // When login is successful then navigate to home page
        navigate('/');

        // show alert message after succesful login of user
        props.showAlert("Login Successfully", "success");

      } else {
        props.showAlert("Invalide Credential", "danger")
      }
      
    } catch (error) {
      props.showAlert("Something went wrong in Log in. Please try again.", "danger");
    }

  }

  // when write in title, description and tag field
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  }

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={credential.email} placeholder="Enter your email" aria-describedby="emailHelp" autoComplete="email" onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={credential.password} id="exampleInputPassword1" autoComplete="current-password" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
    </div>
  )
}

export default Login
