import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import TokenService from '../../services/token-service'
import './BurgerMenu.css';

export default function BurgerMenu(props) {

  function renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/login'>
          Logout
        </Link>
      </div>
    )
  }

  function renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/signup'>
          Sign up
        </Link>
      </div>
    )
  }

  return (
    <Menu {...props}>
      <Link
        // onClick={this.handleLogoutClick}
        to='/'>
        Home
      </Link>

      {TokenService.hasAuthToken()
        ? renderLogoutLink()
        : renderLoginLink()}

      <Link
        // onClick={this.handleHelpClick}
        to='/help'>
        Help
      </Link>
    </Menu>
  );
};