import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../rootReducer';
import rootSaga from '../saga/rootSaga';
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [];
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));
const Reactotron = require('../../ReactotronConfig').default;
const sagaMonitor = Reactotron.createSagaMonitor()
const store = createStore(
  rootReducer,
  composeEnhancers(...enhancers, Reactotron.createEnhancer())
);

sagaMiddleware.run(rootSaga);

export default store;

