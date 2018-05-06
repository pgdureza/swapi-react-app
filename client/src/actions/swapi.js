import { FETCHING_DATA, FETCHING_DATA_FAIL, FETCHING_DATA_SUCCESS, SWITCH_SWAPI_TYPE } from "./constants";


export function getData(dataType){
  return (dispatch) => {
    dispatch(fetchingData())
    fetch('https://swapi.co/api/'+ dataType + '/')
    .then(data => data.json())
    .then(json => {
      dispatch(fetchingDataSuccess(json))
    })
    .catch(e => {
      dispatch(fetchingDataFail())
    })
  }
}

export function fetchingData(){
  return {
    type: FETCHING_DATA
  }
}

export function fetchingDataSuccess(data){
  return {
    type: FETCHING_DATA_SUCCESS,
    payload: data.results
  }
}

export function fetchingDataFail(){
  return {
    type: FETCHING_DATA_FAIL
  }
}

export function switchSWAPIType(type){
  return (dispatch) => {
    dispatch({
      type: SWITCH_SWAPI_TYPE,
      payload: type
    })
    dispatch(getData(type))
  }
}
