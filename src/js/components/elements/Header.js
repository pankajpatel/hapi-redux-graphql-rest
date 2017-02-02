import React from 'react';
import { Link } from 'react-router';
import config from 'root/config'
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <header className="header">
          <div className="container gutter app-name">
            <h1>{config.ui.title}</h1>
            <ul className="app-menu">
              <li><Link to="/home" activeClassName='active' >Home</Link></li>
              <li><Link to="/login" activeClassName='active' >Login</Link></li>
              <li><Link to="/register" activeClassName='active' >Register</Link></li>
              {
                this.props.user !== false && (
                  <li className="dropdown">
                    <button className="btn btn-primary btn-sm pull-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.props.user.name}</button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">Action</button>
                      <button className="dropdown-item" type="button">Another action</button>
                      <button className="dropdown-item" type="button">Something else here</button>
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
          {this.props.children}
        </header>
      );
  }
}
