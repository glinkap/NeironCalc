// import adapter from './adapter';
export const FETCH_GRAPH_DATA   = 'FETCH_GRAPH_DATA';
export const FETCH_GRAPH_BEGIN   = 'FETCH_GRAPH_BEGIN';
export const FETCH_GRAPH_SUCCESS = 'FETCH_GRAPH_SUCCESS';
export const FETCH_GRAPH_FAILURE = 'FETCH_GRAPH_FAILURE';
export const ADAPTER_TO_API = 'ADAPTER_TO_API';
export const SET_DATA_CHART = 'SET_DATA_CHART';

export const URL_HISTOGRAM = 'http://neiron-calc.ru/api/dataset/';

export const fetchGraphData = (url) => {
  return {
    type: FETCH_GRAPH_DATA,
    url: url
  }
};
export const setChart = () => ({
  type: SET_DATA_CHART
});
export const fetchGraphBegin = () => ({
  type: FETCH_GRAPH_BEGIN
});
export const adapterStart = json => ({
  type: ADAPTER_TO_API,
});

export const fetchGraphSuccess = json => ({
  type: FETCH_GRAPH_SUCCESS,
  payload: { json }
});

export const fetchGraphError = error => ({
  type: FETCH_GRAPH_FAILURE,
  payload: { error }
});

export function getData(params) {
  return dispatch => {
    dispatch(fetchGraphBegin());
    const url = URL_HISTOGRAM + params.id + '/' + params.chartType;
    return fetch(url)
      .then()
      .then(res => res.json())
      .then(json => {
        if (json.status > 200 || json.status == 'error') {
          dispatch(fetchGraphError(json));
        } else {
          dispatch(fetchGraphSuccess(json));
          // dispatch(adapterStart(json));

        }
        //если вызвать без диспатч , то нельзя будет событие словить в редюсерах
        return json;
      })
      // .catch(error => dispatch(fetchGraphFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(res) {
  if (res.status > 200 || res.status == 'error') {
    throw Error('Не правильный адрес или нет данных ' + res.error);
  }
  return res;
}