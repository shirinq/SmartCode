import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {applyMiddleware} from 'redux';
import reducers from '../reduxSlice';
import createSagaMiddleware from 'redux-saga';
import {createInjectorsEnhancer} from 'redux-injectors';


const sagaMiddleware = createSagaMiddleware();
const {run: runSaga} = sagaMiddleware;
const middlewares = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

const enhancers = [
  applyMiddleware(...middlewares),
  createInjectorsEnhancer({runSaga, createReducer: reducers})
];

export default function onConfigureStore() {
  return configureStore({
    reducer: reducers(),
    enhancers
  });
}
