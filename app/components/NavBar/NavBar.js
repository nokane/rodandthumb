import React, { Component } from 'react';
import styles from './NavBar.scss';
import { Router, Route, Link } from 'react-router'

class NavBar extends Component {
  render() {
  	return (
      <ul className={styles.topnav}>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/gettingstarted'>Getting Started</Link></li>
        <li><Link to='/equipment'>Equipment</Link></li>
        <li><Link to='/hitchhiking'>Hitchhiking</Link></li>
        <li><Link to='/expectations'>Expectations</Link></li>
        <li><Link to='/chile'>Chile</Link></li>
        <li><Link to='/argentina'>Argentina</Link></li>
        <li><Link to='/nz'>New Zealand</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
  	);
  }
}

export default NavBar;