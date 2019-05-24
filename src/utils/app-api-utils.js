import {
  receiveBuildingListResponse
} from '../actions/action';

const url = "http://smart-meeting.herokuapp.com/";
const AuthToken = 'a123gjhgjsdf6576';

 // GET ALL BUILDINGS
 export function getBuildings(dispatch, params) {
   console.log("coming")
   const query = 
   `{
    Buildings {
        name
     }
   }`
  ;
  const opts = {
    method: "POST",
    body: JSON.stringify({query}), 
    headers: { 'token': AuthToken, 'Content-Type': 'application/json' },
  };
  fetch(url, opts)
    .then(res => res.json())
    .then(res => {
      const successResponse = res.data
      console.log(successResponse)
      dispatch(receiveBuildingListResponse(successResponse));
    })
    .catch(error => {
      const errorResponse = error;
      console.log(errorResponse)
      dispatch(receiveBuildingListResponse(errorResponse));
    });
};

