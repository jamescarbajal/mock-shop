import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu menuClassName="menu-customization">
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/shop">
        Shop
      </a>

      <a className="menu-item" href="/specials">
        Specials
      </a>

      <a className="menu-item" href="/sbout">
        About
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};