import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cardsReducer from 'scenes/CreditCheck/reducers';

export default () => {
  return createStore(
    combineReducers({
      form: formReducer,
      cards: cardsReducer
    })
  );
};
