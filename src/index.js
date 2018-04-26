import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import redux from 'redux';
import reducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer, 
	window.__REDUX_DEVTOOLS_EXTENSION__ 
	&& window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>

	, document.getElementById('root'));
