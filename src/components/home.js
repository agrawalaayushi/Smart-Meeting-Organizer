import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from './Header/header';

import { requestBuildingList } from '../actions/action';
import '../styles/app.scss';

class Home extends Component {

  fetchAllBuildings(event) {
    this.props.fetchAllBuildings();
   }

  componentDidMount() {
    this.fetchAllBuildings()
  }
  
  render() {
    const { buildingListResponse } = this.props;
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state,
  buildingListResponse: state.reducer.get("buildingListResponse")
})

 const mapDispatchToProps = dispatch => ({
  fetchAllBuildings: () => dispatch(requestBuildingList())
 })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
