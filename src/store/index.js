import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import { reducer as formReducer } from 'redux-form';
import creditCheckReducer from 'scenes/CreditCheck/reducers';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      form: formReducer,
      creditCheck: creditCheckReducer
    }),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
