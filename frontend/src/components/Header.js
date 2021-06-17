import React from 'react';
import {Link} from 'react-router-dom';




function Header() {

   return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item active">
         <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/add" className="nav-link">Create Student</Link>  
       
        </li>
        
      </ul>
    </div>
  </div>
</nav>

   )



}


export default Header;