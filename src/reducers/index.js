import { combineReducers } from 'redux'
import {histogram} from './histogram'
import counter from './counter'

export default combineReducers({
	histogram,
	counter
})