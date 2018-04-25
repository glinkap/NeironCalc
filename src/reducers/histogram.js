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

			console.log("пришли в редюсер");
			return reDraw(state, action);
		}
		default: return initialState;
	}

}
function reDraw(state, action) {
	console.log("state", state, action);

	return {...state, z:[1,2,3]};
}
// тут должен быть селектор.
//Селектор — это чистая функция, принимающая в качестве аргумента глобальный стейт и возвращающая его в преобразованном виде.
// Правило: вся бизнес-логика должна находиться внутри обработчиков событий (санков), селекторов и редюсеров.