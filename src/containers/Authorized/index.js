import React, { Component } from 'react';
import { connect } from 'react-redux';


class Authorized extends Component {

  constructor(){
    super();

    this.state = {
      authorized: false
    }
  }

  componentWillMount(){

  }

  componentDidMount(){

    // this.props.loadItems();


    //load items, users, etc.
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    data : state.items

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => {
      dispatch(loadItems())
    }
  }
}

const ConnectedAuthorized = connect(
  mapStatetoProps,
  mapDispatchToProps
)(Authorized)

export default ConnectedAuthorized;
