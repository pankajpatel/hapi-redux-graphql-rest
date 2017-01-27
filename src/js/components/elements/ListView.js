import React from 'react';


export default class ListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <div className="list">
          <ul>
            {this.props.data.map((tile, index) => (
              <li className="list-item"
                key={index}
                title={tile.title}>
                <img src={tile.img} />
                <p>{tile.title}</p>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}
