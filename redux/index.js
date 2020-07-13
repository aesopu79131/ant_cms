import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

export const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

// export const store = createStore(reducer);

// let globalStore;
// export const SetGlobalStore = store => (globalStore = store);
// export const GetGlobalStore = () => globalStore;