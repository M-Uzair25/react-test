import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Navbar(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
        props.showAlert("Logged out successfully", "success")
    }


    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">react-test</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" >Home</Link>
                            </li>
                        </ul>


                        {!localStorage.getItem('token') ?
                            <form className='d-flex'>
                                <Link to="/login" className={`btn btn-primary mx-1 ${location.pathname === "/login" ? "active" : ""}`} >Login</Link>
                                <Link to="/signup" className={`btn btn-primary mx-1 ${location.pathname === "/signup" ? "active" : ""}`} >SignUp</Link>
                            </form> :
                            <Link to="/login" onClick={handleLogout} className={`btn btn-primary ${location.pathname === "/logout" ? "active" : ""}`} >Logout</Link>
                        }

                    </div>
                </div>
            </nav>


        </div>
    )
}
export default Navbar