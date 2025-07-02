import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

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

      if (token.success) {
        // localStorage is a Web API that lets you store data in the browser
        localStorage.setItem('token', token.authToken);

        // show alert message after succesful login of user
        props.showAlert("You’ve successfully logged in. Let's get started!", "success");

        // When login is successful then navigate to home page
        navigate('/');

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
    <div className="container col-md-8 rounded-3" style={{marginTop : "150px", background : "rgb(234 234 234)", padding : "15px"}}>
      <h2 className="text-center mb-5 fw-semibold" style={{fontFamily : "fangsong"}}>Please log in to continue using QuickNote</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{fontSize : "19px", fontFamily : "auto", fontWeight : "600"}}>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" required value={credential.email} placeholder="Enter your email" aria-describedby="emailHelp" autoComplete="email" onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" style={{fontSize : "19px", fontFamily : "auto", fontWeight : "600"}}>Password</label>
          <input type="password" className="form-control" name="password" required value={credential.password} id="exampleInputPassword1" autoComplete="current-password" placeholder="Enter your password" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
        <p className="text-center mt-3">Not registered?
            <Link to="/signup" className="mx-2" style={{textDecoration : "none"}}>
                Create an account
            </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
