import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
    <Link className="navbar-brand" to="/Navbar">My Notes</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
      <form className='d-flex'>
      <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
      </form>
    </div>
  </nav>
  )
}

export default Navbar