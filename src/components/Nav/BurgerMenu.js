import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

export default class BurgerMenu extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      hideOrShowHambugerDropDown: 'nav'
    }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  }

  displayHamburgerMenu = () => {
    return (
      <div className="burger-icon">
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={30}
          height={25}
          strokeWidth={2}
          rotate={0}
          color='black'
          borderRadius={0}
          animationDuration={0.75}
        />
      </div>
    )
  }

  // displayNavBar = () => {
  //   return (
  //     <ul className='nav'>
  //       <li className='nav-link'><NavLink to='/' >Home</NavLink></li>
  //       <li className='nav-link'><NavLink to='/about'>About John Williams</NavLink></li>
  //       <li className='nav-link'><NavLink to='/criminalDefence'>Criminal Defence</NavLink></li>
  //       <li className='nav-link'><NavLink to='/DUIS'>DUIS</NavLink></li>
  //       <li className='nav-link'><NavLink to='/personalInjury'>Personal Personal Injury</NavLink></li>
  //       <li className='nav-link'><NavLink to='/contact'>Contact</NavLink></li>
  //     </ul>
  //   )
  // }

  displayMobileMenu = () => {
    return (
      <ul className='hamburgerDropDown'>
        <li className='nav-link'><NavLink to='/' >Home</NavLink></li>
        <li className='nav-link'><NavLink to='/about'>About John Williams</NavLink></li>
        <li className='nav-link'><NavLink to='/criminalDefence'>Criminal Defence</NavLink></li>
        <li className='nav-link'><NavLink to='/DUIS'>DUIS</NavLink></li>
        <li className='nav-link'><NavLink to='/personalInjury'>Personal Personal Injury</NavLink></li>
        <li className='nav-link'><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    )
  }

  render() {
    return (
      <div className='navbar'>
        {this.state.open ? this.displayMobileMenu() : null}
        {this.displayHamburgerMenu()}
      </div>
    );
  }
}


