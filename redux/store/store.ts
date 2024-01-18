import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';
import rootSaga from '../saga/rootSaga';
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export default store;
