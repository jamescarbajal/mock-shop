import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Shop">
        Shop
      </a>

      <a className="menu-item" href="/Specials">
        Specials
      </a>

      <a className="menu-item" href="/About">
        About
      </a>

      <a className="menu-item" href="/Contact">
        Contact
      </a>
    </Menu>
  );
};