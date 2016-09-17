import React, { Component } from 'react';

class Root extends Component {

  renderStyle() {
    if (process.env.NODE_ENV) {
      return <link rel="stylesheet" type="text/css" href="/style.css"></link>;
    }
  }

  render() {
    const head = this.props.head;
    
    return (
      <html>
        <head>
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {this.renderStyle()}
        </head>
        <body>
          <div id='root' dangerouslySetInnerHTML={{__html: this.props.content}} />
          {head.script.toComponent()}
          <script src={!process.env.NODE_ENV ? '/app.js' : '/app.min.js'}></script>
        </body>
      </html>
    );
  }
}

export default Root;
