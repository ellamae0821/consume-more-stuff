import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { loadItems } from '../../actions/items';

class App extends Component {

  constructor(){
    super();

    this.state = {
      authorized: false
    }
  }

  componentWillMount(){

  }

  componentDidMount(){

    this.props.loadItems();


    //load items, users, etc.
  }

  render() {
    console.log(this.props.data)
    return (
      <div className="App">
       Hello World! Here's where we will render our authorized container and our unauthorized container.
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

const ConnectedApp = connect(
  mapStatetoProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
