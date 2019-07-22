import React from 'react';

import { Nav, Logo } from './style.js';

const NavBar = ({
  children
}) => {
  
  return (
    <Nav>
      <Logo>Squad7</Logo>
      {children}
    </Nav>
  )
}

export default NavBar;
