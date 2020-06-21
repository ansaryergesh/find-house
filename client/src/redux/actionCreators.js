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
                localStorage.setItem('token', data.jwt)
                dispatch(loginUser(data.newAccount))
            }else {
                localStorage.setItem('token', data.jwt)
                dispatch(loginUser(data.registration))
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

// // login

export const loginUser = (user) => {
    return (dispatch) => {
        fetch(baseUrl + 'auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(response => {
                if(response.ok) {
                    return response.json()
                }else {
                    throw response
                }
            })
            .then(JSONResponse => {
                localStorage.setItem('token', JSONResponse.access_token)
                dispatch(setCurrentUser(JSONResponse.user))
            })
            .catch(r => r.json().then(e => dispatch({ type: ActionTypes.FAILED_LOGIN, payload: e.message })))
        
    }
}

  export const failedLogin = (errorMsg) => ({
    type: ActionTypes.FAILED_LOGIN,
    payload: errorMsg
  })


const setCurrentUser = userObj => ({
    type: ActionTypes.SET_CURRENT_USER,
    payload: userObj
})
