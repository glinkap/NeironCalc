import React from 'react';
import ReactDOM from 'react-dom';

// import redux from 'redux';
import {createStore} from 'redux';
import App from './App';
const reducer = (state,action) => ({state});
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
