import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL, SWITCH_SWAPI_TYPE } from '../actions/constants'

const initialState = {
  isLoading: true,
  swlist_type: 'people'
}

var reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isLoading: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        swlist: action.payload
      }
    case FETCHING_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case SWITCH_SWAPI_TYPE:
      return {
        ...state,
        swlist_type: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;