import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

import styles from './NavBar.scss';

class NavBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);

  };
  toggleMenu(e) {
    e.preventDefault();
    this.state.active ? this.setState({ active: false }) : this.setState({ active: true}); 
  }
  render() {
    const activeClass = this.state.active ? 'active' : '';
  	const menuBtnClass = this.state.active ? 'to_nav active' : 'to_nav';
    return (
      <div className="top-nav-wrapper">
        <header>
          <a className={menuBtnClass} href='' onClick={this.toggleMenu.bind(this)}>Menu</a>
        </header>
        <nav id="top-nav" className={activeClass}>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/gettingstarted'>Getting Started</Link></li>
            <li><Link to='/equipment'>Equipment</Link></li>
            <li><Link to='/hitchhiking'>Hitchhiking</Link></li>
            <li><Link to='/expectations'>Expectations</Link></li>
            <li><Link to='/argentina'>Argentina</Link></li>
            <li><Link to='/chile'>Chile</Link></li>
            <li><Link to='/nz'>New Zealand</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>
  	);
  }
}

export default NavBar;