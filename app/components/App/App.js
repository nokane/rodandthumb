import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class App extends Component {

  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{'ang': 'en'}}
          title='Home'
          titleTemplate='Rod And Thumb - %s - DIY Fly Fishing and Hitching Abroad'
          meta={[
            {'char-set': 'utf-8'},
            {'name': 'description', 'content': 'DIY (Do it Yourself) Fly Fishing and Hitchhiking'}
          ]}
        />
        <nav>
          <ul>
            <li><Link to='/'>SF</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
