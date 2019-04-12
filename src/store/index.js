import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = persistReducer({
  key: 'root',
  storage,
  stateReconciler: hardSet,
}, reducers);

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

export const store = createAppropriateStore(rootReducer, applyMiddleware(sagaMiddleware));

export const persistor = persistStore(store);

sagaMiddleware.run(sagas);



