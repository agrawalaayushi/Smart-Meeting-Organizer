import React, { Component } from 'react'
import { connect } from 'react-redux';

class BuildingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //-----------------------------------
  // Methods
  //-----------------------------------
  addMeeting() {
      console.log("coming")
  }
  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    const { buildings } = this.props;
    console.log(buildings)
    return (
      <div className='building-info-wrapper'>
          <div className="info-box">
             <div className="sub-heading">Buildings</div>
             <div className="sub-content">Total {buildings && buildings.length}</div>
          </div>
          <div className="info-box">
             <div className="sub-heading">Rooms</div>
             <div className="sub-content">Total {buildings &&  buildings.length}</div>
             <div className="sub-content">Free Now { buildings && buildings.length}</div>
          </div>
          <div className="info-box meeting">
             <div className="sub-heading">Meetings</div>
             <div className="sub-content">Total { buildings &&  buildings.length} Today</div>
             <div className="sub-content">Total {buildings &&  buildings.length} Going on now</div>
          </div>
        <button type="button" className="primary-btn" onClick={this.addMeeting}> Add a Meeting </button>
      </div>
    )
  }
}

export default (connect(null)(BuildingDetail));
