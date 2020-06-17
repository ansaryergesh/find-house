import { createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import {Session} from './reducers/session';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialRegister} from './formReg';

export const ConfigureStore = () => {
    const store = createStore(

        combineReducers({
            ...createForms({registration: InitialRegister})
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
};
