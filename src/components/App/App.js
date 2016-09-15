import React, { Component }  from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

class App extends Component {

  render() {
    return (
      <div>
        <Helmet
          title='Rod and Thumb'
          titleTemplate='Rod and Thumb - %s'
          meta={[
            {'char-set': 'utf-8'},
            {'name': 'description', 'content': 'DIY - Do it Yourself Fly Fishing and Hitchhiking'}
          ]}
        />
        <nav>
          <ul>
            <li><Link to='/'>Users</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
