import React from 'react';
import { connect as connectState } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Header from 'js/components/elements/Header';
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
        <Header user={this.props.data.user || {} } />
        <div  className="container gutter" >
          <button className="btn btn-primary toggle-view pull-right" type="button" onClick={this.props.onChangeView}>Toggle</button>
          <h2>List/Grid View</h2>
          <List type={this.props.view} data={this.props.data.posts || []} />
        </div>
      </div>
      );
  }
}

const POSTS_QUERY = gql`
  query getUsersAndUser($userId: Int!){
    posts{
      id
      userId
      title
      body
    }
    user(id: $userId) {
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

const HomeWithData = graphql(POSTS_QUERY, {
  options: { variables: { userId: 2 } },
})(Home);

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

    onLoad: () => {
      dispatch(load())
    }
  }
}
export default connectState(
  mapStateToProps,
  mapDispatchToProps
)(HomeWithData)
