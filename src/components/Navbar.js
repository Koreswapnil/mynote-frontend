import React from 'react'
import { Link, useHistory,  } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    history.pushState('/login');
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
           <Link className="navbar-brand text-danger" to="/Navbar">My Notes</Link>

           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
  
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
               <Link className="nav-a ml-5 text-light" to="/">Home</Link>
              </li>
             <li className="nav-item ml-5 active">
               <Link className="nav-a text-light" to="/about">About</Link>
             </li>
           </ul>

          
              {!localStorage.getItem('token') ?
              <form className='d-flex'>
                <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
              </form>
              :
              <button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
          </div>
        </nav>
    </>

  )
}

export default Navbar