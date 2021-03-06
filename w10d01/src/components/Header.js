import React from 'react';

const Header = () => {
  // console.log(props);
  return (
    <header>
      <nav className="container">
        <ul>
          <li><a href="#location">Location</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menus">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#hero">Home</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
