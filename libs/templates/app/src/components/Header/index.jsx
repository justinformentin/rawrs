import React, { Component } from 'react';
import HeaderLink from './HeaderLink';
import MenuBar from './MenuBar';
import NavBar from './NavBar';
import Logo from '../Logo';

class Header extends Component {

  render() {
    return (
      <MenuBar>
        <Logo>Rawrs</Logo>
        <NavBar>
          <HeaderLink to="/" exact>Home</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/usage">Usage</HeaderLink>
        </NavBar>
      </MenuBar>
    );
  }
}
export default Header;
