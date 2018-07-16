import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default () => {
  return createStore(
    combineReducers({
      form: formReducer
    })
  );
};
