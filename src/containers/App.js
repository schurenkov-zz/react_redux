import React, {Component} from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { users } = this.props;
    return <div>TEXT</div>;
  }
}

export default connect(
  state => ({
    users: state.mainState.users
  }),
  dispatch => ({
    onGetUsers:() => {
      dispatch({type: 'GET_USERS'})
    },
  })
)(App);
