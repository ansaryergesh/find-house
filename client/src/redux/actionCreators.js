import * as ActionTypes from './actionTypes';
import {baseUrl} from '../shared/baseUrl';

// registration
export const addAccount = (account) => ({
    type: ActionTypes.REGISTER_ACCOUNT,
    payload: account
})


export const registerAccount = (registration) => (dispatch) => {
    const newAccount = Object.assign({}, registration);
    
    return fetch(baseUrl + 'auth/register', {
        method: 'POST',
        body: JSON.stringify(newAccount),
        headers: {
            'Content-Type': 'application/json',
              Accept: 'application/json',
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;

                throw error;
            }
        },
            error => {
                var errorMessage = new Error(error.errorMessage);
                throw errorMessage;
            }
        )
        .then(response => response.json())
        .then(data=>{
            if(data.message) {
                console.log(data.message)
            }else {
                localStorage.setItem('token', data.jwt)
                dispatch(loginUser(data.newAccount))
            }
        })
        .then(response => dispatch(addAccount(response)))
        .catch(error => {
            dispatch(registerFailed(error.message))
        })
};

export const registerFailed = (errmess) => ({
    type: ActionTypes.REGISTER_FAILED,
    payload: errmess
});

// flash messages

export const addFlashMessage = (message) => ({
    type: ActionTypes.ADD_FLASH_MESSAGE,
    payload: message
})

export const deleteFlashMessage = (id) => ({
    type: ActionTypes.DELETE_FLASH_MESSAGE,
    payload: id
})

// login
const loginUser = userObj => ({
    type: ActionTypes.LOGIN_USER,
    payload: userObj
})

export const userLoginFetch = user => {
    return dispatch => {
        return fetch(baseUrl + 'auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
          .then(resp => resp.json())
          .then(data=> {
              if(data.message) {
                  console.log(data.message)
              }else {
                  localStorage.setItem('token', data.jwt)
                  dispatch(loginUser(data.user))
              }
          })
    }
}