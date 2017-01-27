import React from 'react';

export default class Radio extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <span><input {...this.props} />{this.props.text}</span>
      );
  }
}
