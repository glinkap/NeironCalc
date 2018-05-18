export const FETCH_GRAPH_DATA   = 'FETCH_GRAPH_DATA';
export const FETCH_GRAPH_BEGIN   = 'FETCH_GRAPH_BEGIN';
export const FETCH_GRAPH_SUCCESS = 'FETCH_GRAPH_SUCCESS';
export const FETCH_GRAPH_FAILURE = 'FETCH_GRAPH_FAILURE';
export const SET_DATA_CHART = 'SET_DATA_CHART';

export const fetchGraphData = (url) => ({
  type: FETCH_GRAPH_DATA,
  url: url
});
export const setChart = () => ({
  type: SET_DATA_CHART
});
export const fetchGraphBegin = () => ({
  type: FETCH_GRAPH_BEGIN
});

export const fetchGraphSuccess = graphData => ({
  type: FETCH_GRAPH_SUCCESS,
  payload: { graphData }
});

export const fetchGraphError = error => ({
  type: FETCH_GRAPH_FAILURE,
  payload: { error }
});

export function getData(state, action) {
  return (dispatch, getState) => {
    dispatch(fetchGraphBegin());
    console.log("this", this);
    return fetch(action.url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchGraphSuccess(json.graphData));
        return json.graphData;
      })
      // .catch(error => dispatch(fetchGraphFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}