import * as ActionTypes from '../actionTypes';
const initialState = {
    currentUser: null,
    loggedIn: false,
    failedLogin: false,
    error: null,
}

export const usersReducer = /*FUNCTION*/ (state = initialState, action) => {
  switch (action.type) {
    // TODO: move to types
    case ActionTypes.SET_CURRENT_USER:
      //action.payload {username: 'Chandler Bing', bio: 'my user bio', avatar: 'some image url'}
      return { ...state, currentUser: action.payload, loggedIn: true, }
    case ActionTypes.FAILED_LOGIN: //for error handling
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
      }
    default:
      return state
  }
}
