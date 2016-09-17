import React, { Component } from 'react';
import styles from './Header.scss';

class Header extends Component {
  render() {
  	return (
      <div className={styles.fella}>
        <h1 className={styles.hone}>Rod</h1>
        <h2>Hitchhiking and DIY Fly Fishing Abroad</h2>
      </div>
  	);
  }
}

export default Header;
