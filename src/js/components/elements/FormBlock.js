import React from 'react';
import Input from './Input';
import Button from './Button';
import Radio from './Radio';
import Label from './Label';

export default class FormBlock extends React.Component {
  constructor(props) {
    super(props);
    this.getElement = this.getElement.bind(this);
  }

  getElement(){
    if(this.props.type == 'button' || this.props.type == 'submit'){
      return <Button className="btn" {...this.props} />;
    } else if(this.props.type == 'radio') {
      return <Radio className="form-field" {...this.props} />;
    } else {
      return <Input className="form-field" {...this.props} />;
    }
  }

  render(){
    return (
        <div className={this.props.className || 'form-block'}>
          <Label className="form-label">{this.props.label}</Label>
          {this.getElement()}
        </div>
      );
  }
}
