import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../store/rootReducer';
import rootSaga from './rootSaga';

const saga = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(saga, logger));

saga.run(rootSaga);
export default store;
