import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import categories from './categories';

const rootReducer = combineReducers({ categories, routing: routerReducer });

export default rootReducer;
