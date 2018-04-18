// import {addLine, reDraw} from '../actions/histogram'
import * as actionTypes from '../constants/actionTypes'

export const initialState = {
  data: [],
  loaded: false,
  loading: false,
};
export function histogram(state = initialState, action) {
	switch(action.type) {		
		case actionTypes.ADD_LINE: {
			return {
				...state
			}
		}
		case actionTypes.REDRAW: {
			return reDraw(state, action);
		}
		default: return initialState;
	}

}
function reDraw(state, action) {
	console.log("state", state, action);

	return {...state, z:[1,2,3]};
}