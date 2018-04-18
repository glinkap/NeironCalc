import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import redux from 'redux';
import reducer from './reducers/index'
import {createStore} from 'redux';
import App from './containers/App';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>

	, document.getElementById('root'));
// registerServiceWorker();
