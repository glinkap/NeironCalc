// import {addLine, reDraw} from '../actions/histogram'
import * as actionTypes from '../constants/actionTypes'
import * as graphActions from '../actions/graphActions'

export const initialState = {
    data: [0,0],
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
    error: false,
};
export function chart(state = initialState, action) {
	switch(action.type) {		
        case graphActions.FETCH_GRAPH_DATA: {
        }
        case graphActions.FETCH_GRAPH_BEGIN: {
            return {...state, loading:true};
        }
        case graphActions.FETCH_GRAPH_SUCCESS: {
            return {...state, data: action.payload,
                loading:false, loaded:true};
        }
        case graphActions.FETCH_GRAPH_FAILURE: {
            return {...state, error: action.payload};
        }
        case graphActions.SET_DATA_CHART: {}
		case graphActions.ADAPTER_TO_API: {
            return state;
        }

		default: return initialState;
	}

};


// тут должен быть селектор.
//Селектор — это чистая функция, принимающая в качестве аргумента глобальный стейт и возвращающая его в преобразованном виде.
// Правило: вся бизнес-логика должна находиться внутри обработчиков событий (санков), селекторов и редюсеров.