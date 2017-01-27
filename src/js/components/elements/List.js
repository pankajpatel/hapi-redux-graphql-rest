import React from 'react';
import ListView from './ListView';
import GridView from './GridView';

const placeholderColor = '999999'

const tilesData = [
  {
    img: `http://placehold.it/250/${placeholderColor}/ffffff?text=Placeholder`,
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: `http://placehold.it/250/${placeholderColor}/ffffff?text=Placeholder`,
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: `http://placehold.it/250/${placeholderColor}/ffffff?text=Placeholder`,
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: `http://placehold.it/250/${placeholderColor}/ffffff?text=Placeholder`,
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: `http://placehold.it/250/${placeholderColor}/ffffff?text=Placeholder`,
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: `http://placehold.it/250/${placeholderColor}/ffffff?text=Placeholder`,
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: `http://placehold.it/250/${placeholderColor}/ffffff?text=Placeholder`,
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: `http://placehold.it/250/${placeholderColor}/ffffff?text=Placeholder`,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


export default class List extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    if(this.props.type == 'grid'){
      return (
          <div className="gutter-free clearfix">
            <GridView data={tilesData} />
          </div>
        )
    } else {
      return (
          <div className="gutter-free clearfix">
            <ListView data={tilesData} />
          </div>
        )
    }
  }
}
