import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideNav.css';

export default props => {
  return (
    
    <Menu>
      <a className="menu-item" href="/">
        Photographers
      </a>
      <a className="menu-item" href="/salads">
        Videographers
      </a>
      <a className="menu-item" href="/pizzas">
        Free Album
      </a>
      <a className="menu-item" href="/desserts">
        Equipments
      </a>
      <a className="menu-item" href="/desserts">
        Presets
      </a>
      <a className="menu-item" href="/desserts">
        Hotels
      </a>
    </Menu>
  );
};
