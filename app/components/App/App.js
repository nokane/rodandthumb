import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{'ang': 'en'}}
          title='Home'
          titleTemplate='Rod And Thumb - %s - DIY Fly Fishing and Hitching Abroad'
          meta={[
            {'name': 'viewport', 'content': 'width=device-width, initial-scale=1, maximum-scale=1'},
            {'charset': 'utf-8'},
            {'name': 'description', 'content': 'DIY (Do it Yourself) Fly Fishing and Hitchhiking'}
          ]}
        />
        <Header/>
        <NavBar/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
