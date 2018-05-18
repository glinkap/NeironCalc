// import {addLine, reDraw} from '../actions/histogram'
import * as actionTypes from '../constants/actionTypes'
import * as graphActions from '../actions/graphActions'

export const initialState = {
    data: [],
    dataChart:
        [
            ['Dinosaur', 'Length'],
            [1,12],
            [2, 9],
            [3, 12.2],
            [4, 22.9],
            [5, 0.9],
            [6, 36.6],
            
            
        ]
    ,
    loaded: false,
    loading: false,
};
export function chart(state = initialState, action) {
	switch(action.type) {		
        case graphActions.FETCH_GRAPH_DATA: {
            graphActions.getData(state, action);
        }
		case graphActions.FETCH_GRAPH_BEGIN: {}
		case graphActions.FETCH_GRAPH_SUCCESS: {}
        case graphActions.FETCH_GRAPH_FAILURE: {}
		case graphActions.SET_DATA_CHART: {
            return (
                chartStateSelector(state, action)
            )
        }

		default: return initialState;
	}

};
function chartStateSelector(state, action) { return {...state,z:5}}


function fetchGraphData(state, action) {
	return {
		...state, data: graphActions.fetchGraphData(action.url)
	}
}


// services.fetchData('http://80.211.29.190/api/histogram/3')
// тут должен быть селектор.
//Селектор — это чистая функция, принимающая в качестве аргумента глобальный стейт и возвращающая его в преобразованном виде.
// Правило: вся бизнес-логика должна находиться внутри обработчиков событий (санков), селекторов и редюсеров.