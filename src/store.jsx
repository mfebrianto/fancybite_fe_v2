// ./store.js
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';
import thunk from 'redux-thunk';

import loadingOverlay from './components/reducers/LoadingReducer'

const initialUserState = {
  email: '',
  password: '',
  passwordConfirmation: ''
};







const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineForms({
  user: initialUserState,
  loadingOverlay
}), composeEnhancers(applyMiddleware(thunk)));



// const store = createStore(combineReducers({
//   deep: combineForms({
//     user: initialUserState,
//   }, 'deep'),
//   components: components
// }), composeEnhancers(applyMiddleware(thunk)));

export default store;