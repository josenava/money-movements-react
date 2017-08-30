import { createStore, compose } from 'redux';

import rootReducer from './reducers/index';

const store = createStore(rootReducer, {});

export default store;
