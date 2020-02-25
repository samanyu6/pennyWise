import authType from './authType';
import userData from './userData';
import { combineReducers } from 'redux';

export default Reducer =  combineReducers({
    authType: authType,
    userData: userData
})
