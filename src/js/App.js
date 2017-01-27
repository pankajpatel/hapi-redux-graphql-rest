import React from 'react';
import Header from './components/elements/Header';

export default class App extends React.Component {
  render(){
    return (
        <div>
          <Header />
          <div  className="container gutter">
            {this.props.children}
          </div>
        </div>
      );
  }
}
