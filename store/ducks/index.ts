import {combineReducers} from 'redux';
import authReducer from './auth/slices';
import columnsReducer from './columns/slices';
import prayersReducer from './prayers/slices';

const rootReducer = combineReducers({
  auth: authReducer,
  columns: columnsReducer,
  prayers: prayersReducer,
});

export default rootReducer;
