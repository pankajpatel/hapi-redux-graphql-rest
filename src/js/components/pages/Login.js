import React from 'react';
import Header from 'js/components/elements/Header';
import Form from '../elements/Form';
import Button from '../elements/Button';
import FormBlock from '../elements/FormBlock';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Header user={false} />
        <div  className="container gutter" >
          <h2>Login</h2>
          <Form>
            <FormBlock label="Email" type="text" />
            <FormBlock label="Password" type="password" />
            <FormBlock label=" " text="Login" type="button" />
          </Form>
        </div>
      </div>
      );
  }
}
