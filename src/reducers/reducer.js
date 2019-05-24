import ActionTypes from '../constants/action-type';
import { Map as makeMap } from 'immutable';

export const initialState =  makeMap({

});

const reducer = (state = initialState, action) => {

  if (!action.type) {
    console.log('Payload missing a type!', action);
  }

  switch (action.type) {
    
    case ActionTypes.RECEIVE_BUILDING_LIST_RESPONSE: {
      state = state.set('buildingListResponse', action.response.buildingListResponse.Buildings);
      return state;
    }
    case ActionTypes.RECEIVE_ROOM_LIST_RESPONSE: {
      state = state.set('roomListResponse', action.response.roomListResponse);
      return state;
    }
    default:
      return state
  }
 }

 export default reducer;