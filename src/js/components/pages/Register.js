import React from 'react';
import Header from 'js/components/elements/Header';
import Form from '../elements/Form';
import Button from '../elements/Button';
import FormBlock from '../elements/FormBlock';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Header user={false} />
        <div  className="container gutter" >
          <h2>Register</h2>
          <Form>
            <FormBlock label="Name" type="text" />
            <FormBlock label="Gender" type="radio" text="Male" name="gender" />
            <FormBlock label=" " type="radio" text="Female" name="gender" />
            <FormBlock label="Email" type="email" />
            <FormBlock label="Password" type="password" />
            <FormBlock label=" " text="Login" type="button" />
          </Form>
        </div>
      </div>
      );
  }
}
