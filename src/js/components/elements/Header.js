import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <header className="header">
          <div className="container gutter app-name">
            <h1>HolidayPirates GraphQL Test</h1>
            <ul>
              <li><Link to="/home" activeClassName='active' >Home</Link></li>
              <li><Link to="/login" activeClassName='active' >Login</Link></li>
              <li><Link to="/register" activeClassName='active' >Register</Link></li>
            </ul>
          </div>
          {this.props.children}
        </header>
      );
  }
}
