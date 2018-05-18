import { combineReducers } from 'redux'
import {histogram} from './histogram'
import {chart} from './chart'
import counter from './counter'

export default combineReducers({
	histogram,
	counter,
	chart
})