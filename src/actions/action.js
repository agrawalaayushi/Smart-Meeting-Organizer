import ActionTypes from '../constants/action-type';
import {
  getBuildings, getRooms
} from '../utils/app-api-utils';

 // GET ALL BUILDINGS
export function requestBuildingList(params) {
  return(dispatch)=>{
    getBuildings(dispatch, params);
  }
};

export function receiveBuildingListResponse(response) {
  response.buildingListResponse = response;
  console.log(response)
  return{
    type: ActionTypes.RECEIVE_BUILDING_LIST_RESPONSE,
    response
  }
};

 // GET ALL ROOMS
 export function requestRoomList(params) {
  return(dispatch)=>{
    getRooms(dispatch, params);
  }
};

export function receiveRoomListResponse(response) {
  response.roomListResponse = response;
  return{
    type: ActionTypes.RECEIVE_ROOM_LIST_RESPONSE,
    response
  }
};

