import React, { Component } from 'react';

class Root extends Component {


  renderEnvironment() {
    const innerHtml = `window.__ENVIRONMENT__ = 'dev'`;
    return <script dangerouslySetInnerHTML={{__html: innerHtml}} />
  }

  render() {
    const head = this.props.head;
    
    return (
      <html>
        <head>
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
        </head>
        <body>
          <div id='root' dangerouslySetInnerHTML={{__html: this.props.content}} />
          {head.script.toComponent()}
        </body>
      </html>
    );
  }
}

export default Root;
