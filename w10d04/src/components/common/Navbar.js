import React from 'react';
import { Link } from 'react-router-dom';

const Navbar =  () => {

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">CheeseBored</Link>
      </div>
    </nav>
  );
};



export default Navbar;
