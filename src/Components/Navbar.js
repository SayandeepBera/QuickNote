import React from 'react'
import { Link,useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation(); // to highlight the active link
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">iNotebook</Link>

            {/* Offcanvas Toggle Menu */}
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Offcanvas Menu */}
            <div
                className="offcanvas offcanvas-end text-bg-dark w-75"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {[
                            {name : "Home", path : "/"},
                            {name : "About", path : "/about"}

                        ].map((item)=>(
                            <li key={item.name}>
                                <Link className={`nav-link fw-semibold ${location.pathname === item.name ? "active fs-5" : ""}`} aria-current="page" to={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                    <form className="d-flex" role="search">
                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>
                </div>
                
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar
