import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';
import rootSaga from '../saga/rootSaga';
import createSagaMiddleware from 'redux-saga';
import ReactotronConfig from '../../ReactotronConfig';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(ReactotronConfig.createEnhancer()) ,
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export default store;
