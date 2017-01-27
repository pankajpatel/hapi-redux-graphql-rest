import React from 'react';
import { connect as connectState } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import List from '../elements/List';
import { toggleView, load } from 'js/store/actions'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.onLoad();
  }

  render(){
    return (
        <div>
          <button className="btn btn-primary toggle-view pull-right" type="button" onClick={this.props.onChangeView}>Toggle</button>
          <h2>List/Grid View</h2>
          <List type={this.props.view} data={this.props.posts} />
        </div>
      );
  }
}

const POSTS_QUERY = gql`
  query getUsersAndUser{
    users {
      id
      name
      username
      email
      website
      phone
      address {
        street
        zipcode
        geo{
          lat
          lng
        }
      }
      company {
        name
        catchPhrase
      }
    }
  }
`;

// // // // // // // // // // // // // // // // // // // // // // //



const withClonedList = graphql(POSTS_QUERY, {
  props: ({ownProps, query}) => ({
    onLoad() {
      return query().then(result => {
        ownProps.onLoad(result);
      })
    }
  })
});
const HomeWithData = withClonedList(Home);
// // // // // // // // // // // // // // // // // // // // // // //

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeView: () => {
      dispatch(toggleView())
    },

    // onLoad: () => {
    //   dispatch(load())
    // }
  }
}
export default connectState(
  mapStateToProps,
  // mapQueriesToProps,
  mapDispatchToProps
)(HomeWithData)
