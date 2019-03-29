import '../config/ReactotronConfig';
import { createStore, applyMiddleware } from 'redux';
import reducers from './ducks';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, applyMiddleware(...middleware));


sagaMiddleware.run(sagas);
export default store;
