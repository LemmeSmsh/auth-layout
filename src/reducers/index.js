import { combineReducers } from 'redux'
import authReducer from 'actions/AuthActions'

export const rootReducer = combineReducers({
	auth: authReducer,
})