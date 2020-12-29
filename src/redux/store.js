import { createStore, applyMiddleware } from 'redux';

import rootReducer from './root-reducer';

const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));