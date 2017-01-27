import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <button className={this.props.className || 'btn'} type={this.props.type}>{this.props.text}</button>
      );
  }
}
