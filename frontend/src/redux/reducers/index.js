import {combineReducers} from 'redux'
import auth from './authReducer'
import notify from './notifyReducer'
import ico from './icoReducer'
import deployico from './deployicoReducer'


export default combineReducers ({
    auth,
    notify,
    ico,
    deployico
})