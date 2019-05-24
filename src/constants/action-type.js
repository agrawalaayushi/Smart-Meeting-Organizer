import { zipObject } from 'lodash';

const ACTION_TYPES = [
  'RECEIVE_BUILDING_LIST_RESPONSE',
  'RECEIVE_ROOM_LIST_RESPONSE'
];

export default zipObject(ACTION_TYPES, ACTION_TYPES);