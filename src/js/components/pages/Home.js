import React from 'react';
import List from '../elements/List';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list'
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(){
    if( this.state.view === 'list' ){
      this.setState({view: 'grid'})
    } else {
      this.setState({view: 'list'})
    }
  }

  render(){
    return (
        <div>
          <button className="toggle-view pull-right" type="button" onClick={this.changeView}>Toggle</button>
          <h2>List/Grid View</h2>
          <List type={this.state.view} />
        </div>
      );
  }
}
