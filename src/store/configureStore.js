import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas/saga';
import { createStore, applyMiddleware, compose } from 'redux';

const sagaMiddleware = createSagaMiddleware()
const compMware = compose(applyMiddleware(thunk), applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default createStore(rootReducer, compMware);
sagaMiddleware.run(mySaga);
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducer, 
// 	window.__REDUX_DEVTOOLS_EXTENSION__ 
// 	&& window.__REDUX_DEVTOOLS_EXTENSION__());