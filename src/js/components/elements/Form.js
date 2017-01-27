import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <div className="form-container">
          <form method={this.props.method || 'POST'} action={this.props.action || ''}>
            {this.props.children}
          </form>
        </div>
      );
  }
}
