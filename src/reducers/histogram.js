// import {addLine, reDraw} from '../actions/histogram'
import * as actionTypes from '../constants/actionTypes'
import * as services from '../services/services'

export const initialState = {
  data: [],
  dataChart:{
  	 options: {
  	         title: 'Age vs. Weight comparison',
  	         hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
  	         vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
  	         legend: 'none',
  	     },
  	     rows: [
  	         [8, 12],
  	         [4, 5.5],
  	         [11, 14],
  	         [4, 5],
  	         [3, 3.5],
  	         [6.5, 7],
  	     ],
  	     columns: [{
  	             type: 'number',
  	             label: 'Age',
  	         },
  	         {
  	             type: 'number',
  	             label: 'Weight',
  	         },
  	     ]
  },
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
		case actionTypes.FETCH_GRAPH_DATA: {
			return fetchGraphData(state, action);
		}

		default: return initialState;
	}

}
function reDraw(state, action) {
	return {...state, data:Math.random()*10};
}
function fetchGraphData(state, action) {
	return {
		...state, data: services.fetchData(action.url)
	}
}


// services.fetchData('http://80.211.29.190/api/histogram/3')
// тут должен быть селектор.
//Селектор — это чистая функция, принимающая в качестве аргумента глобальный стейт и возвращающая его в преобразованном виде.
// Правило: вся бизнес-логика должна находиться внутри обработчиков событий (санков), селекторов и редюсеров.