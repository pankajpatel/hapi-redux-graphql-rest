import React from 'react';

export default class GridView extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <div className="grid">
          {this.props.data.map((tile, index) => (
            <div className="grid-item" key={index} >
              <img src={tile.img} />
              <p>{tile.title}</p>
            </div>
          ))}
        </div>
      );
  }
}
