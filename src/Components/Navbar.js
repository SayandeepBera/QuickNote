import React, { useContext } from 'react'
import { Link,useLocation, useNavigate } from "react-router-dom";
import notesContext from '../Context/Notes/notesContext';
import logo from '../Components/images/logo-png (1).png';

const Navbar = () => {
    const location = useLocation(); // to highlight the active link
    const navigate = useNavigate(null);
    const context = useContext(notesContext);
    const {clearNotes} = context;
    
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        clearNotes();
        
        // After logout navigate to home page
        navigate('/');
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top z-3" style={{backgroundColor : "rgb(51 51 51)"}}>
        <div className="container-fluid">
            <img src={logo} alt="logo" style={{height : "67px", margin : "0px 25px"}}/>

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
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{filter : "invert(1)"}}></button>
                </div>

                <div className="offcanvas-body">
                    <ul className="navbar-nav me-auto flex-grow-1 mb-2 mb-lg-0">

                        {[
                            {name : "Home", path : "/"},
                            {name : "About", path : "/about"}

                        ].map((item)=>(
                            <li key={item.name} style={{fontSize : "18px"}}>
                                <Link className={`nav-link fw-semibold mx-2 ${location.pathname === item.path ? "active" : ""}`} aria-current="page" to={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                        <Link className="btn btn-warning mx-3 fw-semibold" style={{fontSize : "18px", color : "white"}} to="/login" role="button">Sign in</Link>
                    </form> : <button className="btn btn-warning mx-3 fw-semibold" style={{fontSize : "18px", color : "white"}} onClick={handleLogout}>Sign out</button>}
                </div>
                
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar
