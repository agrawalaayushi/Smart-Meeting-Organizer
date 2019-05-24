import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from './Header/header';

import { requestBuildingList, requestRoomList } from '../actions/action';
import '../styles/app.scss';
import BuildingDetail from './main/building-detail';

class Home extends Component {

  fetchAllBuildings(event) {
    this.props.fetchAllBuildings();
  }
  fetchAllRooms(event) {
    this.props.fetchAllRooms();
  }

  componentDidMount() {
    this.fetchAllBuildings();
    this.fetchAllRooms();
  }

  render() {
    const { buildingListResponse, roomListResponse } = this.props;
    return (
      <div className="App">
        <Header />
        <BuildingDetail buildings={buildingListResponse} rooms={roomListResponse}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state,
  buildingListResponse: state.reducer.get("buildingListResponse"),
  roomListResponse: state.reducer.get("roomListResponse")
})

 const mapDispatchToProps = dispatch => ({
  fetchAllBuildings: () => dispatch(requestBuildingList()),
  fetchAllRooms: () => dispatch(requestRoomList())
 })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
